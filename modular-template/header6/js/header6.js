const menuBtn = document.querySelector(".menu_container");
const menu = document.querySelector(".menu_content");

menuBtn.addEventListener('click', () => {
    if (menu.classList.length > 1) {
        menu.className = "menu_content";
    } else {
        menu.className = "menu_content menu_click";
    }
})


const sliderContainer = document.querySelector(".slider_container");
const slidercontent = document.querySelector(".slider_content");
const leftButton = document.querySelector(".left_button");
const rightButton = document.querySelector(".right_button");
const lengthSlide = slidercontent.querySelectorAll(".slider_slides").length;

console.log(lengthSlide);

let activeSlideIndex=0;

rightButton.addEventListener('click',()=> changeSlide('up'));

leftButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
    if (direction === "up"){
        activeSlideIndex++
        if (activeSlideIndex > lengthSlide -1){
            activeSlideIndex=0;
        }
    }
    else if(direction === "down"){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex=  lengthSlide-1;
        }
    }

    slidercontent.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
};