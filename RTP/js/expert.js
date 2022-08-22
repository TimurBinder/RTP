const circle = document.querySelectorAll(".circle");
const slider = document.getElementById("installer__work__img-block");
const sliderModalImg = document.querySelectorAll("installer__work__img");
const sliderCard = document.getElementsByClassName("installer__work__img-card");
const sliderArrowLeft = document.querySelector("installer__work__img__arrow-left");
const sliderArrowRight = document.querySelector("installer__work__img__arrow-right");
var sliderInd = 0;

// Карта специалиста
// Слайдер

if (screen.width > 480) {}
function changeSlide(ind) {
    sliderInd += ind;
    if (sliderInd < 0) {
        sliderInd = 4;
    } else if (sliderInd > 4) {
        sliderInd = 0;
    }
    changeCircle(sliderInd);
    sliderImg(sliderInd);
}

function changeSliderInd(ind) {
    sliderInd = ind;
    changeCircle(sliderInd);
    sliderImg(sliderInd);
}

function changeCircle(ind) {
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.background = "#ebecec";
    }
    circle[ind].style.background = "#328ae3";
}

function sliderImg(ind) {
    for (let i = 0; i < sliderCard.length; i++) {
        if (screen.width > 480) {
            sliderCard[i].style.transition = "500ms";
            sliderCard[i].style.transform = "translate(" + (-257 * ind) + "px)";
        }
    }
}
// Мобильная версия

slider.addEventListener("touchstart", touchSlide);
slider.addEventListener("touchmove", moveSlide);
slider.addEventListener("touchend", endSlide);
slider.addEventListener("touchcancel", cancelSlide);
let touchLine = null;
let touchLineCheck = 0;
let touchLinePast = 0;
let touchSum = 0;
console.log(touchSum + " 1");

function touchSlide(event) {
    touchLine = event;
}

function moveSlide(event) {
    event.preventDefault();
        for (let i = 0; i < sliderCard.length; i++) {
            for (let j = 0; j < event.changedTouches.length; j++) {
                touchSum = event.changedTouches[j].clientX - touchLine.changedTouches[0].clientX + touchLinePast;
                if (touchSum <= 0 && touchSum >= (-(window.innerWidth * 4)) - 60) {
                sliderCard[i].style.transform = "translate(" + (touchSum) + "px)";
                } else if (touchSum > 0 || touchSum < (-(window.innerWidth * 4)) - 60) {
                    endSlide(event);
                    cancelSlide(event);
                }
                console.log(event);
                console.log(touchSum);

            touchLineCheck = event.changedTouches[j].screenX;
            }
        } 
    console.log(touchSum);
}

function endSlide(event) {
    touchLinePast += touchLineCheck - touchLine.changedTouches[0].screenX;
    touchLine = event;
    event.preventDefault();
}

function cancelSlide(event) {
    event.preventDefault();
  console.log("touchcancel.");
  const touches = event.changedTouches;
}