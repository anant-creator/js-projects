const number = document.querySelector('#value');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
let count = 0;


increase.addEventListener('click', () => {
    count += 1
    countCheck()
    number.innerHTML = count;
})

decrease.addEventListener('click', () => {
    count -= 1
    countCheck()
    number.innerHTML = count;
})

reset.addEventListener('click', () => {
    count = 0
    countCheck()
    number.innerHTML = count;
})

function countCheck() {
    if (count > 0) {
        number.style.color = "green"
    } else if (count < 0) {
        number.style.color = "red"
    } else {
        number.style.color = "black"
    }
}