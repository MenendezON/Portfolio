const menu = document.querySelector('.hamb');
const title = document.querySelector('h1');
const intro = document.querySelector('p');
const nav = document.querySelector('.nav');
const btnclose = document.querySelector('.close');
const item = document.querySelector('.menu');
menu.addEventListener('click', () => {
  title.style.display = 'none';
  intro.style.display = 'none';
  nav.style.display = 'block';
});
btnclose.addEventListener('click', () => {
  document.getElementById('side-menu').checked = false;
  nav.style.display = 'none';
  title.style.display = 'block';
  intro.style.display = 'block';
});
item.addEventListener('click', () => {
  document.getElementById('side-menu').checked = false;
  nav.style.display = 'none';
  title.style.display = 'block';
  display(intro, 'block');
});


function display(type, state) {
  return type.style.display = state;
}

//close the modal
const closeBtn = document.querySelectorAll('.closeBtn');
closeBtn.forEach((clsBtn) => {
  clsBtn.addEventListener('click', (event) => {
    const cl = event.target.parentNode;
    cl.style.display = 'none';
    cl.parentNode.setAttribute('class', 'project achievement p1');

    document.getElementById('btn 1').remove();
    document.getElementById('btn 2').remove();
    document.getElementById('btn').style.display = 'block';
  });
});

//open the modal
const viewpjt = document.querySelectorAll('.btn');
viewpjt.forEach((btns) => {
  btns.addEventListener('click', (event) => {
    const ach = event.target.parentNode;
    console.log(event);
   ach.parentNode.setAttribute('class', 'project popup');
    document.querySelector('.closeBtn').style.display = 'block';


    btns.style.display = 'none';

    createBtn(ach, "See live <img src='./public/images/goonline.jpeg' alt=' '>", "btn 1");
    createBtn(ach, "Hello Button <img src='./public/images/github.png' alt=' '>", "btn 2");
  });
});

// generate a button
function createBtn(type, content, lstClass) {
  const btn = document.createElement("button");
  btn.innerHTML = content;
  btn.setAttribute('class', lstClass);
  btn.setAttribute('id', lstClass);
  return type.appendChild(btn);
}

