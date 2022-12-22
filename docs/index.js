const humburgerBtn = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menue');
const Portfolio = document.querySelectorAll('.card');

humburgerBtn.addEventListener('click', () => {
  humburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menue > a').forEach((n) => n.addEventListener('click', () => {
  humburgerBtn.classList.remove('active');
  navMenu.classList.remove('active');
}));

const arrWork = [
  {
    id: 1,
    title: 'Tonic',
    company: 'canopy',
    role: 'Back End Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/web-img1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://peacefulkind.github.io/',
    linkToSource: 'https://github.com/Peacefulkind/peacefulkind.github.io/tree/main',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img4.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://peacefulkind.github.io/',
    linkToSource: 'https://github.com/Peacefulkind/peacefulkind.github.io/tree/main',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2015,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://peacefulkind.github.io/',
    linkToSource: 'https://github.com/Peacefulkind/peacefulkind.github.io/tree/main',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: 2018,
    closeImg: 'images/close.jpg',
    img: 'images/portfolio-img2.png',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'JavaScript'],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is 
    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard, dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the 
    relea`,
    linkToLive: 'https://peacefulkind.github.io/',
    linkToSource: 'https://github.com/Peacefulkind/peacefulkind.github.io/tree/main',
  },
];

for (let i = 0; i < arrWork.length; ++1) { // eslint-disable-line no-console
  let languages = '';
  arrWork[i].technologies.forEach((language) => {
    languages += `
        <li id='lang'>${language}</li>
      `;
    Portfolio[i].innerHTML = `
        <a href="#">
            <img class="img-container" src=${arrWork[i].img} alt="project-image1" />
          </a>
        <div class="content">
          <div class="project_name">
            <h3 id="title">${arrWork[i].title}</h3>
          </div>
          <div class="project_info">
            <div class="company">
              <p>${arrWork[i].company}</p>
            </div>
            <ul class="ul">
              <li class="role">${arrWork[i].role}</li>
              <li class="year">${arrWork[i].year}</li>
          </ul>
          </div>
          <div class="description">
            <p>
              ${arrWork[i].desc}
            </p>
          </div>
          <ul class="languages">
            ${languages}
          </ul>
          <button type="button" class="button-container" onclick='openPop(${arrWork[i]?.id})'>
            See Project
          </button>
        </div>
      `;
  });
}
