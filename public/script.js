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
  //nav.style.display = 'none';
  title.style.display = 'block';
  display(intro, 'block');
});

// Activity 2 : Lauch the modal
const cards = document.getElementsByClassName('item')[1];

const projects = [
  {
    title: 'Motorcycle Appointment',
    subtitle: ['CANOPY', 'Full stack web Dev', 2023],
    tags: ['Ruby on rails', 'React', 'Bootstrap', 'PostgreSQL'],
    imageURL: './public/images/project/motorbike.png',
    description:
      'Motorcycle Appointment is a web platform tailored for motorcycle enthusiasts, offering an immersive experience to discover the latest models from leading brands and easily book exhilarating rides.',
    seeLive: 'https://motorcycle-lksr.onrender.com/',
    seeSource: 'https://github.com/MenendezON/book-an-appointment',
  },
  {
    title: 'GebCristal',
    subtitle: ['CANOPY', 'WordPress', 2022],
    tags: ['WordPress', 'Elementor', 'MySQL'],
    imageURL: './public/images/project/img1.jpg',
    description:
      'Gebcristal is a company founded in Haiti in 2016 by Gabrielle Odin, a Frenchwoman, Reiki Master, lover of stones and applied neuroscience coach. Gabrielle provides Reiki treatments to which she associates the energy of crystals, and also organizes workshops, training courses and initiations around lithotherapy, personal development and Reiki. Trained and certified at INA as an applied neuroscience coach, Gabrielle has recently equipped herself further to deepen her quest for knowledge of the human being, with the aim of accompanying each person towards their true purpose, their true self, and their personal and professional fulfillment.',
    seeLive: 'https://gebcristal.com',
    seeSource: '#',
  },
  {
    title: 'Sama cogn',
    subtitle: ['CANOPY', 'Mobile Dev', 2023],
    tags: ['Flutter', 'Dart', 'Firebase'],
    imageURL: './public/images/project/sama-kogn.png',
    description:
      `In this first version, users can explore a selection of emblematic places in different African countries. Each location is accompanied by photos and information for an immersive learning experience.<br/>

      This first version of "Africa" is the fruit of many hours of hard work in development, and we are proud to share this unique experience with you. We hope you enjoy exploring Africa through our application.`,
    seeLive: 'https://play.google.com/store/apps/details?id=com.sama.kogn.sn.samakogn',
    seeSource: 'https://github.com/MenendezON/Africa-App',
  },
  {
    title: 'Math Magicians',
    subtitle: ['CANOPY', 'Full stack Web Dev', 2023],
    tags: ['Webpack', 'CSS', 'Javascript'],
    imageURL: './public/images/project/math.png',
    description:
      'Math Magicians, it is a website project. It is a single-page app project based on React that allows users to make simple calculations and read a random faith-related quote.',
    seeLive: 'https://mathmagicians-9uao.onrender.com/',
    seeSource: 'https://github.com/MenendezON/math-magicians',
  },
];

const openModal = (i) => {
  cards.classList.replace('item', 'bg-popup');

  const projectInfos = projects[i].subtitle.map((tec) => `${tec}`);

  const projectTechs = projects[i].tags.map((tec) => `<li class="tag-item">${tec}</li>`);

  cards.innerHTML = `
  <div class="popup">
    <div class="head">
      <div class="title-closebtn">
        <h3 class="subtitle">${projects[i].title}</h3>
        <img src="./public/images/cross-black.jpeg" alt="Cancel" class="closeBtn">
      </div>
      <div class="subtitle">
        <p class="infos">${projectInfos.join(' • ')}</p>
      </div>
    </div>
    <div class="illustration">
      <img src="${projects[i].imageURL}" alt=" " class="fullPic">
    </div>
    <div class="caption">
      <div class="description">
        <p class="paragraph">${projects[i].description}</p>
      </div>
      <div class="details">
        <ul>${projectTechs.join('')}</ul>&nbsp;
        <div class="buttons">
          <a class="btn-popup" href="${projects[i].seeLive}" target="_blank">
            See live <img src="./public/images/goonline.jpeg" alt=" ">
          </a>
          <a class="btn-popup" href="${projects[i].seeSource}" target="_blank">
            Source code <img src="./public/images/github.png" alt=" ">
          </a>
        </div>
      </div>
    </div>
  </div>`;
};

const showCards = (i, color) => {
  const projectInfos = projects[i].subtitle.map((tec) => `${tec}`);

  const projectTechs = projects[i].tags.map((tec) => `<li class="tag-item">${tec}</li>`);

  cards.innerHTML += `
  <div class="achievement">
    <div class="col-left" style="border-color:${color}">
      <img src="${projects[i].imageURL}" alt=" " class="fullPic">
    </div>
    <div class="col-right">
      <h3 class="subtitle">${projects[i].title}</h3>
      <p class="infos">${projectInfos.join(' • ')}</p>
      <p class="paragraph">${projects[i].description}</p>
      <ul>${projectTechs.join('')}</ul>
      <button type="button" class="btn-popup">See project</button>
    </div>
  </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  const Colors = ['red', 'green', 'orange'];
  projects.forEach((ele, i) => {
    if (i >= 0) showCards(i, Colors[i]);
  });

  cards.innerHTML += `
    <div class="see-more">
     <a href="https://github.com/MenendezON" target="_blank" class="btn-popup">See more projects on my GitHub</a><br/><br/>
    </div>
  `;

  const seeProject = document.querySelectorAll('.btn-popup');

  seeProject.forEach((project, i) => {
    seeProject[i].addEventListener('click', () => {
      openModal(i);
      const cancel = document.querySelector('.closeBtn');
      cancel.addEventListener('click', () => {
        cards.classList.replace('bg-popup', 'item');
        document.getElementsByClassName('popup')[0].classList.replace('popup', 'achievement');
        window.location.reload();
      });
    });
  });
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