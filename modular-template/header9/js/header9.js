const menuBtn = document.querySelector(".menu_container");
const menu = document.querySelector(".menu_content");

menuBtn.addEventListener('click', () => {
    if (menu.classList.length > 1) {
        menu.className = "menu_content";
    } else {
        menu.className = "menu_content menu_click";
    }
})

// click function 10sec
setInterval(function () {
    rightButton.click()
}, 10000);

// slider updown movement
const sliderContainer = document.querySelector(".slider_container");
const slidercontent = document.querySelector(".slider_content");
const leftButton = document.querySelector(".left_button");
const rightButton = document.querySelector(".right_button");
const lengthSlide = slidercontent.querySelectorAll(".slider_slides").length;
const activeDot = document.getElementById("dots");


// slider
let activeSlideIndex=0;
let activeDotIndex=0;
rightButton.addEventListener('click',()=> changeSlide('up'));
leftButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up"){
        activeSlideIndex++;
        if (activeSlideIndex > lengthSlide -1){
            activeSlideIndex=0;
        }
    }
    else if(direction === "down"){
        activeSlideIndex--;
        if (activeSlideIndex < 0){
            activeSlideIndex=  lengthSlide-1;
        }
    }
    activeDot.children[activeDotIndex].className = "dot";
    activeDot.children[activeSlideIndex].className = "dot dot_active";
    slidercontent.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    activeDotIndex = activeSlideIndex;
};

// popup Windows
document.getElementById("contact").addEventListener("click",function(){
    document.querySelector(".contact").style.display="flex";
})
document.querySelector(".close_button_contact").addEventListener("click",function(){
    document.querySelector(".contact").style.display="none";
})

document.getElementById("portfolio").addEventListener("click", function () {
    document.querySelector(".portfolio").style.display = "flex";
})
document.querySelector(".close_button_portfolio").addEventListener("click", function () {
    document.querySelector(".portfolio").style.display = "none";
})

document.getElementById("job").addEventListener("click", function () {
    document.querySelector(".job").style.display = "flex";
})
document.querySelector(".close_button_job").addEventListener("click", function () {
    document.querySelector(".job").style.display = "none";
})

document.getElementById("about").addEventListener("click", function () {
    document.querySelector(".about").style.display = "flex";
})
document.querySelector(".close_button_about").addEventListener("click", function () {
    document.querySelector(".about").style.display = "none";
})