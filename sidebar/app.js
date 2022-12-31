const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.sidebar'); 

sidebarToggle.addEventListener('click', function() {
   sidebar.classList.toggle('show-sidebar')
})

close.addEventListener('click', () => {
   sidebar.classList.remove('show-sidebar')
})