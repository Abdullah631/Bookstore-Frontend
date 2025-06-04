// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    const booksSlider = new Swiper('.books-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        grabCursor: true,
    });
    const featuredSlider = new Swiper('.featured-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    const arrivalsSlider = new Swiper('.arrivals-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    });
    const reviewsSlider = new Swiper('.reviews-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });
    const blogsSlider = new Swiper('.blogs-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });
        const loginBtn = document.getElementById('login-btn');
        const closeLoginBtn = document.getElementById('close-login-btn');
        const loginForm = document.querySelector('.login-form-container');
        if (closeLoginBtn && loginForm) {
            closeLoginBtn.addEventListener('click', () => {
                loginForm.classList.remove('active');
            });
        }
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.querySelector('.search-form');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchForm.classList.toggle('active');
    });
    window.addEventListener('load', function () {
        document.querySelector('.loader-container').style.display = 'none';
    });
});
