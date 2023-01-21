import getElement from './elementSelector.js';
import getData from './getData.js';

const url = "https://randomuser.me/api/";

const  img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let info = "";

function displayUser(info, type="name") {
    img.src = info.image;
    title.textContent = `My ${type} is`;
    value.textContent = info[type];
}

async function start(type = "name") {
    const data = await fetchData();
    info = getData(data.results[0]);
    displayUser(info, type);
}

window.addEventListener('DOMContentLoaded', () => {
    start();
    displayUser(info);
});

btn.addEventListener('click', () => {
    start();
    displayUser(info);
});

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const type = e.currentTarget.dataset.label;
        displayUser(info, type);
    });
})