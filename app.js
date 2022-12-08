searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container')
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {

    searchform.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.add('active');
    }
}

window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.add('active');
    }
}

var swiper = new Swiper(".books-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
