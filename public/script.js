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
const cards = document.getElementsByClassName('item')[1];

const projects = [
  {
    title: 'Projet 1',
    subtitle: ['CANOPY', 'Back End Dev', 2020],
    tags: ['Html', 'CSS', 'Ruby'],
    imageURL: './public/images/img1.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Projet 2',
    subtitle: ['CANOPY', 'CMS', 2013],
    tags: ['WordPress', 'MySQL'],
    imageURL: './public/images/img2.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: '#',
    seeSource: '#',
  },
  {
    title: 'Projet 3',
    subtitle: ['CANOPY', 'Fullstack Dev', 2023],
    tags: ['Flutter', 'Dart', 'Firebase'],
    imageURL: './public/images/img3.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: '#',
    seeSource: '#',
  },
];

const openModal = (i) => {
  cards.classList.replace('item', 'bg-popup');

  const projectInfos = projects[i].subtitle.map((tec) => `${tec}`);

  const projectTechs = projects[i].tags.map((tec) => `<li class="tag">${tec}</li>`);

  cards.innerHTML = `<div class="popup"><div class="step"><img src="${projects[i].imageURL}" alt=" " class="fullPic"></div>
  <div class="step"><img src="./public/images/cross-black.jpeg" alt="Cancel" class="closeBtn"></div>
  <div class="step"><h3 class="subtitle">${projects[i].title}</h3><p class="infos">${projectInfos.join(' • ')}</p></div>
  <p class="paragraph">${projects[i].description}</p>
  <div class="step"><div class="col"><ul>${projectTechs.join('')}</ul></div>
  <a class="btn-popup" href="${projects[i].seeLive}">See live <img src="./public/images/goonline.jpeg" alt=" "></a>
  <a class="btn-popup" href="${projects[i].seeSource}">Source code <img src="./public/images/github.png" alt=" "></a>
  </div></div>`;
};

const showCards = (i) => {
  const projectInfos = projects[i].subtitle.map((tec) => `${tec}`);

  const projectTechs = projects[i].tags.map((tec) => `<li class="tag">${tec}</li>`);

  cards.innerHTML += `<div class="achievement"><div class="step"><img src="${projects[i].imageURL}" alt=" " class="fullPic"></div>
  <div class="step"><img src="./public/images/cross-black.jpeg" alt="Cancel" class="closeBtn"></div>
  <div class="step"><h3 class="subtitle">${projects[i].title}</h3><p class="infos">${projectInfos.join(' • ')}</p></div>
  <p class="paragraph">${projects[i].description}</p>
  <div class="step"><div class="col"><ul>${projectTechs.join('')}</ul></div>
  <button type="button" class="btn-popup">See project</button></div></div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  projects.forEach((ele, i) => {
    if (i >= 0) showCards(i);
  });

  const seeProject = document.querySelectorAll('.btn-popup');

  seeProject.forEach((project, i) => {
    seeProject[i].addEventListener('click', () => {
      openModal(i);
      const cancel = document.querySelector('.closeBtn');
      cancel.addEventListener('click', () => {
        cards.classList.replace('bg-popup', 'item');
        document.getElementsByClassName('popup')[0].classList.replace('popup', 'achievement');

        projects.forEach((ele, i) => {
          if (i >= 0) showCards(i);
        });
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
