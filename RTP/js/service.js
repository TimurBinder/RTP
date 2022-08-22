const selectHead = document.querySelectorAll(".select__head");
const selectList = document.querySelectorAll(".select__list");
const selectOption = document.querySelectorAll(".select__option");
let listInd = 0;
let optionInd = 0;

const questionTitle = document.querySelectorAll(".questions__block__title");
const questionArrowArr = ["../img/Service/Icons/questionArrowDown.svg", "../img/Service/Icons/questionArrow.svg"];
const questionIntro = document.querySelectorAll(".questions__block__intro");
const questionLine = document.querySelectorAll(".questions__block__line");

//Фильтры
for (let i = 0; i < selectOption.length; i++) {
    selectOption[i].addEventListener("click", function() {
        optionInd = i;
        filtersChoice(optionInd);
    })
}

function listChange(ind) {
    listInd = ind;
    filters(listInd);
}

function filters(ind) {
    if (selectList[ind].classList.contains("none")) {
        for (let i = 0; i < selectList.length; i++) {
            selectList[i].classList.add("none");
        }
        selectList[ind].classList.remove("none");
    } else {
        selectList[ind].classList.add("none");
    }
}

function filtersChoice(ind) {
    selectHead[listInd].innerHTML = selectOption[ind].innerHTML;
}

// Мобильная версия

const filtersMobileOpen = document.getElementById("filters__icon");
const filtersMobileClose = document.getElementById("filters__close-mobile");
const filtersMobile = document.getElementById("filters-full-mobile");
const filterSeniority = document.getElementById("filters__seniority");
const filterSeniorityDown = document.getElementById("filters__seniority-down");
const filterSeniorityUp = document.getElementById("filters__seniority-up");
let filterSeniorityInd = 0;
filterSeniority.innerHTML = filterSeniorityInd;

filtersMobileOpen.onclick = function() { //Открытие фильтров
    filtersMobile.style.display = "flex";
}

filtersMobileClose.onclick = function() { //Закрытие фильтров
    filtersMobile.style.display = "none";
}

filterSeniorityUp.onclick = function() { //Стаж больше
    filterSeniorityInd++;
    filterSeniority.innerHTML = filterSeniorityInd;
}

filterSeniorityDown.onclick = function() { //Стаж меньше
    filterSeniorityInd--;
    if (filterSeniorityInd < 0) {
        filterSeniorityInd = 0;
    }
    filterSeniority.innerHTML = filterSeniorityInd;
}


//Ответы на вопросы
function question(ind) { 
    if (questionIntro[ind].classList.contains("none")) {
        questionIntro[ind].classList.remove("none");
        questionLine[ind].classList.add("none");
        questionTitle[ind].classList.add("question__arrow");
    } else {
        questionIntro[ind].classList.add("none");
        questionLine[ind].classList.remove("none");
        questionTitle[ind].classList.remove("question__arrow");
    }
    console.log(questionTitle);
}





// ---------------------------------------------------------------------------

// Модальное окно картинок 
const modalImgSlider = document.querySelector(".modal-img");
const modalImgMainImg = document.querySelector(".modal-img__main-img");
const modalImgMainCaption = document.getElementsByClassName("modal-img__main-caption");
const modalImgListImg = document.getElementsByClassName("modal-img__list-img");
const sliderCaptionVisible = document.getElementsByClassName("installer__visible-caption");
const sliderCaptionHidden = document.getElementsByClassName("installer__hidden-caption");

let modalImgInd = 0;

function openModalImg() {
    modalImgInd = sliderInd;
    modalImgSlider.style.display = "block";
    imgModalImg(modalImgInd);
}

function openModalImgInd(ind) {
    modalImgInd = ind;
    modalImgSlider.style.display = "block";
    imgModalImg(modalImgInd);

}

function closeModalImg() {
    modalImgSlider.style.display = "none";
}

function changeModalImgInd(ind) {
    modalImgInd = ind;
    imgModalImg(modalImgInd);
}

function changeModal(ind) {
    modalImgInd += ind;
    if (modalImgInd < 0) {
        modalImgInd = 5;
    } else if (modalImgInd > 5) {
        modalImgInd = 0;
    }
    imgModalImg(modalImgInd);
}

function imgModalImg(ind) {
    for(let i = 0; i < modalImgListImg.length; i++) {
        modalImgListImg[i].style.border = "none";
    }
    modalImgListImg[ind].style.border = "1px solid #fff";
    modalImgMainImg.src = modalImgListImg[ind].src;
    modalImgMainCaption[0].innerHTML = sliderCaptionVisible[ind].innerHTML + sliderCaptionHidden[ind].innerHTML;
}
// -----------------------

