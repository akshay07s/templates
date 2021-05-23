const menuBtn = document.querySelector(".menu_container");
const menu = document.querySelector(".menu_content");

menuBtn.addEventListener('click', () => {
    if (menu.classList.length > 1) {
        menu.className = "menu_content";
    } else {
        menu.className = "menu_content menu_click";
    }
})

$('.header4_slider_container').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    prevArrow: $('.button_left'),
    nextArrow: $('.button_right'),
    // autoplay: true,
    // autoplaySpeed: 2000,
});