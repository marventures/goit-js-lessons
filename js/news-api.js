const BASE_URL = 'https://newsapi.org/v2/everything';
// change this to your API Key
// reference: https://newsapi.org/docs/get-started
const API_KEY = '8219ad0dd6eb470e8be6c4057caf094e';

/////////////////////////////////////////////////////////////////

// FETCH
// export function getNews(query) {
//   return fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`).then(res => res.json());
// }

// AXIOS
// export function getNews(query) {
//   return axios.get(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`).then(res => res.data);
// }

//////////////////////////////////////////////////////////////////

// Async/await (Axios)

export async function getNews(query) {
  const response = await axios.get(`${BASE_URL}?q=${query}&apiKey=${API_KEY}`);
  const data = response.data;
  return data;
}
