const BASE_URL = 'https://newsapi.org/v2/everything';
// NOTE: Please use your own API KEY below
const API_KEY = '';

export class NewsApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
  }

  getNews() {
    // with pagination
    // Reference: https://newsapi.org/docs/endpoints/everything
    const url = `${BASE_URL}?q=${this.searchQuery}&pageSize=5&page=${this.queryPage}`;

    // without pagination
    // const url = `${BASE_URL}?q=${this.searchQuery}`;

    // can also store the API key inside headers property under options argument of fetch
    const options = {
      headers: {
        'X-Api-Key': API_KEY,
      },
    };

    return (
      fetch(url, options)
        .then(res => res.json())
        // consume the data
        .then(data => {
          // increase querypPage after fetching a page
          this.incrementPage();
          return data;
        })
    );
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
