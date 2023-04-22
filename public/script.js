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
  return type.parentNode.appendChild(btn);
}

createBtn('', '', '', '');

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
const namef = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function storeValues() {
  const obj = {
    name: namef.value,
    email: email.value,
    message: message.value,
  };
  window.localStorage.setItem('myObject', JSON.stringify(obj));
}

namef.addEventListener('input', storeValues);
email.addEventListener('input', storeValues);
message.addEventListener('input', storeValues);

window.addEventListener('load', () => {
  const myObject = localStorage.getItem('myObject');
  const newObj = JSON.parse(myObject);

  namef.value = newObj.name || '';
  email.value = newObj.email || '';
  message.value = newObj.message || '';
});