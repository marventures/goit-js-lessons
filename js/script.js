import { NewsApi } from './NewsApi.js';
import { LoadMoreBtn } from './components/LoadMoreBtn.js';

///////////////////////////////////////////////////////////////////////

const formEl = document.getElementById('form');
const articlesWrapperEl = document.getElementById('articlesWrapper');

///////////////////////////////////////////////////////////////////////

// instantiate loadMoreBtn class
const loadMoreBtn = new LoadMoreBtn({
  selector: '#loadMoreBtn',
  isHidden: true,
});

// instantiate newsAPI class
const newsApi = new NewsApi();

///////////////////////////////////////////////////////////////////////

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  newsApi.searchQuery = form.elements.news.value.trim();
  clearNewsList();
  newsApi.resetPage();
  loadMoreBtn.show();

  fetchNews().finally(() => form.reset());
}

formEl.addEventListener('submit', handleSubmit);

///////////////////////////////////////////////////////////////////////

function fetchNews() {
  loadMoreBtn.disable();

  return newsApi
    .getNews()
    .then(data => {
      console.log(data);
      const { articles } = data;

      if (articles.length === 0) throw new Error();

      return articles.reduce((acc, article) => createMarkup(article) + acc, '');
    })
    .then(markup => {
      updateNewsList(markup);
      loadMoreBtn.enable();
    })
    .catch(onError);
}

// we dynamically get the selector using 'button' property on LoadMoreBtn Class
loadMoreBtn.button.addEventListener('click', fetchNews);
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

function clearNewsList() {
  articlesWrapperEl.innerHTML = '';
}

///////////////////////////////////////////////////////////////////////

function updateNewsList(markup) {
  articlesWrapperEl.insertAdjacentHTML('beforeend', markup);
}

///////////////////////////////////////////////////////////////////////

function onError() {
  updateNewsList('<p>Articles not found</p>');
}
