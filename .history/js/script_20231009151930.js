//header
function FixedAnime() {
    var headerH = $('.l-header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {
        $('.l-header').addClass('is-active');
    } else {
        $('.l-header').removeClass('is-active');
    }
}

$(window).scroll(function ())


//swiper
const swiper = new Swiper(".js-swiper-container", {
    autoplay: {
        delay: 4000,
    },
    speed: 500,
    loop: true,
    effect: "fade",

    //ページネーション
    pagination: {
        el: ".swiper-pagination",
    },

    //ナビボタン
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});