const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navToggle = document.querySelector('.nav-toggle');
const centerNav = document.querySelector('.nav-center');
const bluring = document.querySelectorAll('.blury');
const back = document.getElementById('scroll-top');
const date = document.querySelector('.date');
const nav = document.getElementById('nav');
const pic = document.querySelector('.vPic');
const control = document.querySelectorAll('.btn');
const radios = document.querySelectorAll('.input');
const titleInfo = document.querySelector('.titleInfo');
const radioss = document.querySelectorAll('.allRadios');
const descriptionInfo = document.querySelector('.desciptionInfo');
const mainOverlay = document.getElementById('mainOverlay');


//DONE ^^
var mood = "open";
navToggle.addEventListener('click', function () {
    centerNav.classList.toggle("mynav");
    linksContainer.classList.toggle("active");
    bluring.forEach(function (el) {
        el.classList.toggle('TheBlur');
    })
    if (mood === "open") {
        navToggle.innerHTML = '<i class="fa-solid fa-arrow-up-from-bracket"></i>';
        nav.style.background = "rgba(0, 0, 0, 0.95)";
        mainOverlay.style.zIndex = '100';
        mood = "close";
    }
    else {
        navToggle.innerHTML = '<i class="bars fa-solid fa-bars"></i>';
        mainOverlay.style.zIndex = '0';
        mood = "open";
    }
});
mainOverlay.addEventListener('click', function () {
    centerNav.classList.remove("mynav");
    linksContainer.classList.remove("active");
    navToggle.innerHTML = '<i class="bars fa-solid fa-bars"></i>';
    mainOverlay.style.zIndex = '0';
    bluring.forEach(function (el) {
        el.classList.remove('TheBlur');
    })
    mood ="open";
})


//DONE ^^
date.innerHTML = new Date().getFullYear();
window.onscroll = function () {
    if (window.scrollY >= 130) {
        back.style.display = "block";
    }
    else {
        back.style.display = "none";
    }
    centerNav.classList.remove("mynav");
    linksContainer.classList.remove("active");
    navToggle.innerHTML = '<i class="bars fa-solid fa-bars"></i>';
    mainOverlay.style.zIndex = '0';
    bluring.forEach(function (el) {
        el.classList.remove('TheBlur');
    })
    mood = "open";
};
back.addEventListener('click', function () {
    window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
});


//DONE ^^
scrollLinks.forEach(function (scrollLink) {
    scrollLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        window.scrollTo({
            left: 0,
            top: position - 50,
        });
    });
});