"use strict"
let menu = document.querySelector('.hamb');
let title = document.querySelector('h1');
let intro = document.querySelector('p');
let nav = document.querySelector('.nav');
let btnclose = document.querySelector('.close');
let item = document.querySelector('.menu');
menu.addEventListener("click", function(){
    title.style.display = "none";
    intro.style.display = "none";
    nav.style.display = "block";
});
btnclose.addEventListener('click', function(){
    document.getElementById('side-menu').checked = false;
    nav.style.display = "none";
    title.style.display = "block";
    intro.style.display = "block";
});
item.addEventListener('click', function(){
    document.getElementById('side-menu').checked = false;
    nav.style.display = "none";
    title.style.display = "block";
    intro.style.display = "block";
});