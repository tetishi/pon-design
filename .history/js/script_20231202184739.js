//ハンバーガーメニュー
var btnMenu = $(".js-btn-menu");
var globalNav = $(".p-global-nav");
var globalCover = $(".p-global-cover");

btnMenu.on("click", function)

//スクロールしたらヘッダーの背景色が変化
$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $(".l-header").addClass("is-active");
    } else {
        $(".l-header").removeClass("is-active");
    }
});

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
