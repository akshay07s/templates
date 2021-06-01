const menuBtn = document.querySelector(".menu_container");
const menu = document.querySelector(".menu_content");

menuBtn.addEventListener('click', () => {
    if (menu.classList.length > 1) {
        menu.className = "menu_content";
    } else {
        menu.className = "menu_content menu_click";
    }
})

$('.slider_container').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 996,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    {
        breakpoint: 556,
        settings: {
            slidesToShow: 1.5,
            slidesToScroll: .5,
        }
    },
    ]
});