import data from './data.js';

const toggleBtn = document.querySelector('.btn');
const articles = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => document.documentElement.classList.toggle('dark-theme'));

function displayArticle() {
    const allArticles = data.map((art) => {
        const { title, snippet: content, date, length } = art;
        const f = new Intl.DateTimeFormat("en-us", {
            dateStyle: 'full',
        })
        const formatedDate = f.format(date);
        return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatedDate}</span>
          <span>${length} min read</span>
        </div> 
        <p>${content}</p>
      </article>`
    }).join("");
    articles.innerHTML = allArticles;
}

displayArticle();

