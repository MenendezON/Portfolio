// Activity 1 : Manage de menu
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
function display(type, state) {
  const x = type.style;
  x.display = state;
  return x;
}
item.addEventListener('click', () => {
  document.getElementById('side-menu').checked = false;
  nav.style.display = 'none';
  title.style.display = 'block';
  display(intro, 'block');
});

// Activity 2 : Lauch the modal
function createBtn(type, content, lstClass, link) {
  const btn = document.createElement('a');
  btn.innerHTML = content;
  btn.setAttribute('class', lstClass);
  btn.setAttribute('id', lstClass);
  btn.setAttribute('href', link);
  return type.appendChild(btn);
}

const viewpjt = document.querySelectorAll('.btn');
const clsbtn = document.getElementsByClassName('closeBtn')[0];
viewpjt.forEach((btns) => {
  btns.addEventListener('click', (event) => {
    const ach = event.target.parentNode;
    const l2 = ach.parentNode;
    l2.classList.replace('achievement', 'popup');
    l2.parentNode.classList.replace('item', 'bg-popup');
    document.getElementsByClassName('achievement')[0].style.display = 'none';
    document.getElementsByClassName('achievement')[1].style.display = 'none';
    clsbtn.style.display = 'block';
    btns.style.display = 'none';
    const position = document.getElementsByClassName('step')[3];
    createBtn(position, "See live <img src='./public/images/goonline.jpeg' alt=' '>", 'btn-popup', '#');
    createBtn(position, "Source code <img src='./public/images/github.png' alt=' '>", 'btn-popup', '#');
  });
});
clsbtn.addEventListener('click', () => {
  document.querySelector('.bg-popup').classList.replace('bg-popup', 'item');
  document.querySelector('.popup').classList.replace('popup', 'achievement');
  const position = document.getElementsByClassName('step')[3];
  position.removeChild(position.children[3]);
  position.removeChild(position.children[3]);
  document.getElementById('btn').style.display = 'block';
  clsbtn.style.display = 'none';
  document.getElementsByClassName('achievement')[0].removeAttribute('style');
  document.getElementsByClassName('achievement')[1].removeAttribute('style');
  document.getElementsByClassName('achievement')[2].removeAttribute('style');
});

// Activity 3 : Validation form
function validateForm() {
  const emailField = document.getElementById('email');
  const email = emailField.value;
  if (email !== email.toLowerCase()) {
    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = '**The email must be in lowercase.';
    errorMessage.style.color = 'white';
    errorMessage.style.fontStyle = 'italic';
    emailField.parentNode.appendChild(errorMessage, emailField.nextSibling);
    return false;
  }
  return true;
}

document.getElementsByClassName('btnForm')[0].addEventListener('submit', validateForm);

// Activity 4 : Local storage
