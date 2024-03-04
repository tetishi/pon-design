//ハンバーガーメニュー
var btnMenu = $(".js-btn-menu");
var globalNav = $(".p-global-nav");
// var globalCover = $(".p-global-cover");

btnMenu.on("click", function () {
    btnMenu.toggleClass("is-active");
    globalNav.toggleClass("is-show");
    // globalCover.toggleClass("is-show");
});

//スクロールしたらヘッダーの背景色が変化
$(window).scroll(function() {
    if($(this).scrollTop() > 0) {
        $(".l-header").addClass("is-active");
    } else {
        $(".l-header").removeClass("is-active");
    }
});

//100px以上スクロールしたらpagetopボタン表示
$(function () {
    const pageTop = $(".c-page-top");
    pageTop.hide(); // 最初はボタンを非表示にする
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
            pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
        } else {
            pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
        }
    });
})

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
