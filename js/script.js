import { getNews } from './news-api.js';

const formEl = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const inputValue = form.elements.news.value;

  getNews(inputValue)
    .then(data => {
      console.log(data);
      const { articles } = data;

      if (articles.length === 0) throw new Error();
      return articles.reduce((markup, article) => createMarkup(article) + markup, '');
    })
    .then(updateNewsList)
    .catch(onError)
    .finally(() => form.reset());
}

formEl.addEventListener('submit', handleSubmit);

///////////////////////////////////////////////////////////////////////

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
        <div class="article-card">
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${author || 'Anonym'}</h3>
            <img src=${urlToImage} class="article-img">
            <p class="article-description">${description}</p>
            <a href=${url} class="article-link" target="_blank">Read more</a>
        </div>
        
        `;
}

///////////////////////////////////////////////////////////////////////

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}

///////////////////////////////////////////////////////////////////////

function onError() {
  updateNewsList('<p>Articles not found</p>');
}
