//swiper
const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 4000,
    },
    speed: 500,
    loop: true,
    effect: "fade",

    pagination: {
        el: ".swiper-pagination"
    }
});
