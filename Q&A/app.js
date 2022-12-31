//using selectors inside the element
// traversing the dom
const questions = document.querySelectorAll('.question');
console.log(questions)
questions.forEach((i) => {
    i.addEventListener('click', (e) => {
       if (e.target.classList.contains('fa-plus-square')) {
          questions.forEach((e) => e.classList.remove('show-text'))
          i.classList.add('show-text')
       } else if (e.target.classList.contains('fa-minus-square')) {
        i.classList.remove('show-text')
       }
    })
})