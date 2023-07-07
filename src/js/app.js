// Javascript code goes here

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const date = document.querySelector('.date');


navToggle.addEventListener('click', () => links.classList.toggle('show-links'))

// set current date
const currentDate = new Date().getFullYear();
date.innerHTML = currentDate;