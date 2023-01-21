const submiBtn = document.querySelector('.submit-btn');
const search = document.querySelector('.form-input');
const articles = document.querySelector('.articles');

submiBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getPageID(search.value);
});

async function getPageID(value) {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${value}`);
    const data = await response.json();
    const searchResults = data.query.search;
    const outputHtml = searchResults.map((result) => {
        const { title, pageid, snippet } = result;
        return `<a href="http://en.wikipedia.org/?curid=${pageid}">
          <h4>${title}</h4>
          <p>${snippet}</p>
        </a>`;
    }).join("");
    console.log(outputHtml);
    articles.innerHTML = outputHtml;
           
}
