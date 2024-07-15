const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    // spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination1',
        type: 'fraction',
        clickable: true,
    },

    // autoplay: {
    //     delay: 4000,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        991: {
            slidesPerView: 3,
        },
    },
});

const swiperMobile = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },

    navigation2: {
        forward: '.swiper-button-next',
        back: '.swiper-button-prev',
    },


});