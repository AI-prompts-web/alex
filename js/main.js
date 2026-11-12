window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

document.addEventListener('keydown', function(event){
    if((event.ctrlKey || event.metaKey) && (event.key.toLowerCase() === "s")){
        event.preventDefault();
    }
});

document.addEventListener('keydown', function(event){
    if((event.ctrlKey || event.metaKey) && (event.key.toLowerCase() === "u")){
        event.preventDefault();
    }
});

const links = document.querySelectorAll('.project');
const portlinks = document.querySelectorAll('.project-card');
const popup = document.querySelector('.popup-container');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });
});

portlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'flex';
    });
});

const year = document.getElementById('year');
const toyear = new Date().getFullYear();

year.innerHTML = toyear;

console.log(window.scrollY);

const back = document.getElementById('back')
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if(scrollTop >= 1000) {
        back.style.scale = '1';
    } else {
        back.style.scale = '0';
    }
});

const loader = document.querySelector('.loader-container');
setTimeout(() => {
    loader.style.opacity = 0;
    document.body.style.overflowY = 'auto';
    setTimeout(() => {
        loader.style.zIndex = -2000;
    }, 1000)
}, 2000);

const closeBtn = document.querySelector('.popup-close');
closeBtn.addEventListener('click', () => popup.style.display = 'none');

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

filters[0].addEventListener('click', (e) => {
    e.preventDefault();
    filters[0].classList.add('active');
    filters[1].classList.remove('active');
    filters[2].classList.remove('active');
    filters[3].classList.remove('active');
    projects.forEach((project) => {
        project.style.display = '';
    });
});
filters[1].addEventListener('click', (e, classname='WA') => {
    e.preventDefault();
    filters[1].classList.add('active');
    filters[0].classList.remove('active');
    filters[2].classList.remove('active');
    filters[3].classList.remove('active');
    projects.forEach((project) => {
        if(project.classList.contains(classname)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
filters[2].addEventListener('click', (e, classname='F') => {
    e.preventDefault();
    filters[2].classList.add('active');
    filters[0].classList.remove('active');
    filters[1].classList.remove('active');
    filters[3].classList.remove('active');
    projects.forEach((project) => {
        if(project.classList.contains(classname)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
filters[3].addEventListener('click', (e, classname='B') => {
    e.preventDefault();
    filters[3].classList.add('active');
    filters[0].classList.remove('active');
    filters[2].classList.remove('active');
    filters[1].classList.remove('active');
    projects.forEach((project) => {
        if(project.classList.contains(classname)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
