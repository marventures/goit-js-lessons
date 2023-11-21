const BASE_URL = 'https://newsapi.org/v2/everything';
// change this to your API Key
// const API_KEY = '8219ad0dd6eb470e8be6c4057caf094e';

export function getNews(query) {
  return fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
