const accordeonBlock = document.getElementsByClassName("accordeon-wrapper");
const tab = document.getElementsByClassName("first-screen__tab");
const tabOffer = document.getElementsByClassName("first-screen__tab__block");
const tabHeating = document.getElementsByClassName("first-screen__tab-heating");
const tabWaterSupply = document.getElementsByClassName("first-screen__tab-water-supply");
const tabSewage = document.getElementsByClassName("first-screen__tab-sewage");
const tabOfferHeating = document.getElementsByClassName("first-screen__tab__block-heating");
const tabIcon = document.getElementsByClassName("first-screen__tab__icon");
let widthTab = 95;
let visibilityTab = [1, 1, 1];


for (let i = 0; i < accordeonBlock.length; i++) {
    accordeonBlock[i].onclick = function() {
        accordeonBlock[i].style.transition = "500ms";
        if (visibilityTab[i] == 0) {
            if (i == 0) {
                for (let j = 0; j < accordeonBlock.length; j++) {
                    accordeonBlock[j].style.transform = "translateX(0)";
                    hiddenTab(j);
                    visibilityTab[j] = 1;
                }
            } else if (i == 1) {
                for (let j = 1; j < accordeonBlock.length; j++) {
                    accordeonBlock[j].style.transform = "translateX(0)";
                    hiddenTab(j);
                    visibilityTab[j] = 1;
                }
                showTab(i - 1);
            } else if (i == 2) {
                accordeonBlock[i].style.transform = "translateX(0)";
                hiddenTab(i);
                showTab(i - 1);
                visibilityTab[i] = 1;
            }
        } else if (visibilityTab[i] == 1) {
            if (i == 0) {
                accordeonBlock[i].style.transform = "translateX(calc(-25vw + " + widthTab * 2 + "px - 11vw))";
                showTab(i);
                visibilityTab[i] = 0;
            } else if (i == 1) {
                for (let j = 1; j >= 0; j--) {
                    accordeonBlock[j].style.transform = "translateX(calc(-25vw + " + widthTab * 2 + "px - 11vw))";
                    hiddenTab(j);
                    visibilityTab[j] = 0;
                }
                showTab(i);
            } else if (i == 2) {
                for (let j = 2; j >= 0; j--) {
                    accordeonBlock[j].style.transform = "translateX(calc(-25vw + " + widthTab * 2 + "px - 11vw))";
                    hiddenTab(j);
                    visibilityTab[j] = 0;

                }
                showTab(i);
            }
        }
    }
}


let tabLocation = [19, 21, 37, 19, 21, 37, 19, 21, 37];

function showTab(ind) {
    if (ind == 0) {
        for (let i = 0; i < tabHeating.length; i++) {
            tabHeating[i].style.opacity = "100";
            tabHeating[i].style.transform = "translate(-" + tabLocation[i] + "vw)";
        }
    } else if (ind == 1) {
        for (let i = 0; i < tabWaterSupply.length; i++) {
            tabWaterSupply[i].style.opacity = "100";
            tabWaterSupply[i].style.transform = "translate(-" + tabLocation[i + 3] + "vw)";
        }
    } else if (ind == 2) {
        for (let i = 0; i < tabSewage.length; i++) {
            tabSewage[i].style.opacity = "100";
            tabSewage[i].style.transform = "translate(-" + tabLocation[i + 6] + "vw)";
        }
    }
}

function hiddenTab(ind) {
    if (ind == 0) {
        for (let i = 0; i < tabHeating.length; i++) {
            tabHeating[i].style.opacity = "0";
            tabHeating[i].style.transform = "translateX(0)";
        }
    } else if (ind == 1) {
        for (let i = 0; i < tabWaterSupply.length; i++) {
            tabWaterSupply[i].style.opacity = "0";
            tabWaterSupply[i].style.transform = "translate(0)";
        }
    } else if (ind == 2) {
        for (let i = 0; i < tabSewage.length; i++) {
            tabSewage[i].style.opacity = "0";
            tabSewage[i].style.transform = "translate(0)";
        }
    }
}

for (let i = 0; i < tab.length; i++) {
    tabIcon[i].onclick = function() {
        if (tabOffer[i].style.opacity == "100") {
            tabOffer[i].style.display = "none";
            tabOffer[i].style.transition = "500ms";
            tabOffer[i].style.opacity = "0";
            tabOffer[i].style.transform = "translateY(20px)";
            tabOffer[i].style.zIndex = "-1";
        } else {
            tabOffer[i].style.display = "block";
            tabOffer[i].style.transition = "500ms";
            tabOffer[i].style.opacity = "100";
            tabOffer[i].style.transform = "translateY(0px)";
            tabOffer[i].style.zIndex = "1";
        }
    }
}

// Слайдер
const solutionSliderSelect = document.getElementsByClassName("solutions__slider__select-block");
const solutionSliderInfo = document.getElementsByClassName("solutions__slider__info-block");
const solutionSliderSelectName = document.getElementsByClassName("solutions__slider__select__name");

for (let i = 0; i < solutionSliderSelect.length; i++) {
    solutionSliderSelect[i].onclick = function() {
        for (let j = 0; j < solutionSliderSelect.length; j++) {
            solutionSliderInfo[j].classList.remove("solutions__slider__info-block-selected");
            solutionSliderSelect[j].classList.remove("solutions__slider__select-block-selected");
            solutionSliderSelectName[j].classList.remove("solutions__slider__select__name-selected");
        }
        solutionSliderInfo[i].classList.add("solutions__slider__info-block-selected");
        solutionSliderSelect[i].classList.add("solutions__slider__select-block-selected");
        solutionSliderSelectName[i].classList.add("solutions__slider__select__name-selected");
    }
}

// Скролл вверх
const scrollUp = document.getElementsByClassName("scroll-up");
var time;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-200);
		time = setTimeout('up()',15);
	} else clearTimeout(time);
	return false;
}

for (let i = 0; i < scrollUp.length; i++) {
    scrollUp[i].onclick = function() {
        up();
    }
}

// Смена стиля кнопки онлайн поддержки
const onlineSupport = document.getElementById("online-support");
const onlineSupportAlternate = document.getElementById("online-support-alternate");

onlineSupport.onclick = function() {
    onlineSupport.style.display = "none";
    onlineSupportAlternate.style.display = "flex";
}

onlineSupportAlternate.onclick = function() {
    onlineSupportAlternate.style.display = "none";
    onlineSupport.style.display = "flex";
}
