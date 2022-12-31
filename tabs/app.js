const btns = document.querySelectorAll('.tab-btn');
const btnContainer = document.querySelector('.btn-container');
const articles = document.querySelectorAll('.content');

btnContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id, articles) 
    if (e.target.dataset.id) {
        btns.forEach((i) => i.classList.remove('active'));
        e.target.classList.add('active');
    }
    articles.forEach(function (a) { 
        a.classList.remove('active');
    });
        let active = document.getElementById(id);
        active.classList.add('active');
})