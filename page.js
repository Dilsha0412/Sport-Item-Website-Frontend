// Menu toggle
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('.bxs-search-alt-2');
let searchBox = document.querySelector('.search-box');

menu.onclick = () => {
  navbar.classList.toggle('active');
};

searchIcon.onclick = () => {
  searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
};
