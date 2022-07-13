const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#FFFFFF"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let index = Math.floor(Math.random() * colors.length);
    color.innerHTML = colors[index];
    document.body.style.backgroundColor = `${colors[index]}`;
})


