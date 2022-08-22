const accordeon = document.getElementById("accordeon");
const accordeonBlock = document.getElementsByClassName("accordeon__block");
const accordeonWrapper = document.getElementsByClassName("accordeon-wrapper");
const tab = document.getElementsByClassName("first-screen__tab");
const tabOffer = document.getElementsByClassName("first-screen__tab__block");
const tabHeating = document.getElementsByClassName("first-screen__tab-heating");
const tabWaterSupply = document.getElementsByClassName("first-screen__tab-water-supply");
const tabSewage = document.getElementsByClassName("first-screen__tab-sewage");
const tabOfferHeating = document.getElementsByClassName("first-screen__tab__block-heating");
const tabIcon = document.getElementsByClassName("first-screen__tab__icon");
let widthTab = accordeonBlock[0].offsetWidth;
var firstWidthMain = widthTab;
var firstWidthSecond = widthTab;
var firstWidthThird = widthTab;
var firstPositionMain = widthTab * 2;
var firstPositionSecond = widthTab;
var firstPositionThird = 0;
var positionMain = widthTab * 2;
var positionSecond = widthTab;
var positionThird = 0;

accordeonBlock[0].style.right = firstPositionMain + "px";
accordeonBlock[1].style.right = firstPositionSecond + "px";
accordeonBlock[2].style.right = firstPositionThird + "px";

for (let i = 0; i < accordeonBlock.length; i++) {
    accordeonBlock[i].onmousedown = function(event) {
        var firstX = event.clientX;
        if (i == 0) {
            firstWidthMain = accordeonWrapper[i].offsetWidth;
            firstPositionMain = accordeonBlock[i].getBoundingClientRect().x;
        } else if (i == 1) {
            firstWidthSecond = accordeonWrapper[i].offsetWidth;
            firstPositionSecond = accordeonBlock[i].getBoundingClientRect().x;
        } else if (i == 2) {
            firstWidthThird = accordeonWrapper[i].offsetWidth;
            firstPositionThird = accordeonBlock[i].getBoundingClientRect().x;
        }       
        
        moveAt(event.clientX);
      

        function moveAt(clientX) {

            // Убирает лишние вкладки при перетаскивании слайдов
            for (let j = 0; j < tab.length; j++) {
                let tabRight = window.getComputedStyle(tab[j], null).getPropertyValue("right");
                tabRight = tabRight.replace("px", "");
                tabRight = -parseInt(tabRight);
                if (j < 3) {
                    if (tabRight <= accordeonWrapper[0].offsetWidth) {
                        tab[j].style.opacity = "100";
                    } else {
                        tab[j].style.opacity = "0";
                    }
                }
                if (j > 2) {
                    if (j < 6) {
                        if (tabRight <= accordeonWrapper[1].offsetWidth) {
                            tab[j].style.opacity = "100";
                        } else { 
                            tab[j].style.opacity = "0";
                        }
                    } else if (j > 5) {
                        if (tabRight <= accordeonWrapper[2].offsetWidth) {
                            tab[j].style.opacity = "100";
                        } else {
                            tab[j].style.opacity = "0";
                        }
                    }
                }
            }
            

            if (i == 0) {
                if (accordeonBlock[i].getBoundingClientRect().x >= 0) {
                    positionMain = window.screen.width - (clientX - firstX + firstPositionMain + accordeonBlock[i].offsetWidth + 17);
                    accordeonBlock[i].style.right = positionMain + 'px';
                    accordeonWrapper[i].style.width = positionMain - positionSecond + "px";
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                } else { 
                    positionMain = positionMain - 1;
                    accordeonBlock[i].style.right = positionMain + "px";
                }

                // Контролирует перемещение второго слайда
                // Не дает переместить первый слайд за второй
                if (positionMain < positionSecond + widthTab) {
                    accordeonWrapper[1].style.width = positionMain - widthTab - positionThird + "px";
                    positionSecond = positionMain - widthTab;
                    accordeonBlock[1].style.right = positionSecond + "px";
                    // Не дает переместить первый и второй слайды за третий
                    if (positionSecond < positionThird + widthTab) {
                        accordeonWrapper[2].style.width = positionSecond + "px";
                        positionThird = positionSecond - widthTab;
                        accordeonBlock[2].style.right = positionThird + "px";
                        // Не дает переместить слайды за границы экрана справа
                        if (positionThird < 0) {
                            positionThird = 0;
                            accordeonBlock[2].style.right = positionThird + "px";
                            accordeonWrapper[2].style.width = widthTab + "px";
                            positionSecond = positionThird + widthTab;
                            accordeonBlock[1].style.right = positionSecond + "px";
                            accordeonWrapper[1].style.width = positionSecond + "px";
                            positionMain = positionSecond + widthTab;
                            accordeonBlock[0].style.right = positionMain + "px";
                            accordeonWrapper[0].style.width = positionMain - widthTab + "px";
                        }
                    }
                }

                // Не дает переместить первый слайд за границы экрана
                if (positionMain > accordeon.offsetWidth - widthTab - 17) {
                    positionMain = accordeon.offsetWidth - widthTab - 17;
                    accordeonBlock[i].style.right = positionMain + "px";
                    accordeonWrapper[i].style.width = positionMain - positionSecond + "px";
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
            } else if (i == 1) {  
                positionSecond = window.screen.width - (clientX - firstX + firstPositionSecond + accordeonBlock[i].offsetWidth + 17);
                accordeonBlock[i].style.right = positionSecond + 'px';
                accordeonWrapper[i].style.width = positionSecond - positionThird + "px";
                accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                
                // Контролирует перемещение второго слайда
                // Не дает переместить второй слайдер дальше первого
                if (positionSecond > positionMain - widthTab) {
                    accordeonWrapper[0].style.width = positionSecond + widthTab + "px";
                    positionMain = positionSecond + widthTab;
                    accordeonBlock[0].style.right = positionMain + "px";
                    // Не дает переместить первый и второй слайды за границы экрана
                    if (positionMain > accordeon.offsetWidth - widthTab - 17) {
                        positionMain = accordeon.offsetWidth - widthTab - 17;
                        accordeonBlock[0].style.right = positionMain + "px";
                        accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                        positionSecond = positionMain - widthTab;
                        accordeonBlock[i].style.right = positionSecond + "px";
                        accordeonWrapper[i].style.width = positionSecond - positionThird + "px";
                    }
                }

                // Не дает переместить второй слайдер за третий
                if (positionSecond < positionThird + widthTab) {
                    accordeonWrapper[2].style.width = positionSecond + "px";
                    positionThird = positionSecond - widthTab;
                    accordeonBlock[2].style.right = positionThird + "px";
                    // Не дает переместить второй и третий слайды за границы экрана
                    if (positionThird < 0) {
                        positionThird = 0;
                        accordeonBlock[2].style.right = positionThird + "px";
                        accordeonWrapper[2].style.width = widthTab + "px";
                         positionSecond = positionThird + widthTab;
                        accordeonBlock[1].style.right = positionSecond + "px";
                        accordeonWrapper[1].style.width = positionSecond + "px";
                    }
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
            

                if (accordeonWrapper[0].offsetWidth >= positionMain - positionSecond) {
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                }
            } else if (i == 2) {
                
                    positionThird = window.screen.width - (clientX - firstX + firstPositionThird + accordeonBlock[i].offsetWidth + 17);
                    accordeonBlock[i].style.right = positionThird + 'px';
                    accordeonWrapper[i].style.width = positionThird + accordeonBlock[i].offsetWidth + "px";
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                    
                // Контролирует перемещение третьего слайда
                // Не дает переместить третий слайд дальше второго
                if (positionThird > positionSecond - widthTab) {
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                    positionSecond = positionThird + widthTab;
                    accordeonBlock[1].style.right = positionSecond + "px";
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                    // Не дает переместить третий и второй слайды дальше первого
                    if (positionSecond > positionMain - widthTab) {
                        accordeonWrapper[0].style.width = positionMain - positionSecond - (widthTab * 2) + "px";
                        positionMain = positionSecond + widthTab;
                        accordeonBlock[0].style.right = positionMain + "px";
                        // Не дает переместить слайды за границы экрана слева
                        if (positionMain > accordeon.offsetWidth - widthTab - 17) {
                            positionMain = accordeon.offsetWidth - widthTab - 17;
                            accordeonBlock[0].style.right = positionMain + "px";
                            accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                            positionSecond = positionMain - widthTab;
                            accordeonBlock[1].style.right = positionSecond + "px";
                            accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                            positionThird = positionSecond - widthTab;
                            accordeonBlock[i].style.right = positionThird + "px";
                            accordeonWrapper[i].style.width = positionThird + widthTab + "px";
                        }
                    }
                }

                // Не дает переместить третий слайд за границы экрана
                if (positionThird < 0) {
                    positionThird = 0;
                    accordeonBlock[i].style.right = positionThird + "px";
                    accordeonWrapper[i].style.width = widthTab + "px";
                    accordeonWrapper[1].style.width = positionSecond + "px";
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
                
            }
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX);
        }
      
        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
      
      };
      
      document.ondragstart = function() {
        return false;
      };
}


for (let i = 0; i < accordeonBlock.length; i++) {
    accordeonBlock[i].ontouchstart = function(event) {
        var firstX = event.changedTouches[0].clientX;
        console.log("click " + i);
        if (i == 0) {
            firstWidthMain = accordeonWrapper[i].offsetWidth;
            firstPositionMain = accordeonBlock[i].getBoundingClientRect().x;
        } else if (i == 1) {
            firstWidthSecond = accordeonWrapper[i].offsetWidth;
            firstPositionSecond = accordeonBlock[i].getBoundingClientRect().x;
        } else if (i == 2) {
            firstWidthThird = accordeonWrapper[i].offsetWidth;
            firstPositionThird = accordeonBlock[i].getBoundingClientRect().x;
        }       
        
        moveAtTouch(event.changedTouches[0].clientX);
      

        function moveAtTouch(clientX) {

            // Убирает лишние вкладки при перетаскивании слайдов
            for (let j = 0; j < tab.length; j++) {
                let tabRight = window.getComputedStyle(tab[j], null).getPropertyValue("right");
                tabRight = tabRight.replace("px", "");
                tabRight = -parseInt(tabRight);
                if (j < 3) {
                    if (tabRight <= accordeonWrapper[0].offsetWidth) {
                        tab[j].style.opacity = "100";
                    } else {
                        tab[j].style.opacity = "0";
                    }
                }
                if (j > 2) {
                    if (j < 6) {
                        if (tabRight <= accordeonWrapper[1].offsetWidth) {
                            tab[j].style.opacity = "100";
                        } else { 
                            tab[j].style.opacity = "0";
                        }
                    } else if (j > 5) {
                        if (tabRight <= accordeonWrapper[2].offsetWidth) {
                            tab[j].style.opacity = "100";
                        } else {
                            tab[j].style.opacity = "0";
                        }
                    }
                }
            }
            

            if (i == 0) {
                if (accordeonBlock[i].getBoundingClientRect().x >= 0) {
                    positionMain = window.screen.width - (clientX - firstX + firstPositionMain + accordeonBlock[i].offsetWidth);
                    accordeonBlock[i].style.right = positionMain + 'px';
                    accordeonWrapper[i].style.width = positionMain - positionSecond + "px";
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                } else { 
                    positionMain = positionMain - 1;
                    accordeonBlock[i].style.right = positionMain + "px";
                }

                // Контролирует перемещение второго слайда
                // Не дает переместить первый слайд за второй
                if (positionMain < positionSecond + widthTab) {
                    accordeonWrapper[1].style.width = positionMain - widthTab - positionThird + "px";
                    positionSecond = positionMain - widthTab;
                    accordeonBlock[1].style.right = positionSecond + "px";
                    // Не дает переместить первый и второй слайды за третий
                    if (positionSecond < positionThird + widthTab) {
                        accordeonWrapper[2].style.width = positionSecond + "px";
                        positionThird = positionSecond - widthTab;
                        accordeonBlock[2].style.right = positionThird + "px";
                        // Не дает переместить слайды за границы экрана справа
                        if (positionThird < 0) {
                            positionThird = 0;
                            accordeonBlock[2].style.right = positionThird + "px";
                            accordeonWrapper[2].style.width = widthTab + "px";
                            positionSecond = positionThird + widthTab;
                            accordeonBlock[1].style.right = positionSecond + "px";
                            accordeonWrapper[1].style.width = positionSecond + "px";
                            positionMain = positionSecond + widthTab;
                            accordeonBlock[0].style.right = positionMain + "px";
                            accordeonWrapper[0].style.width = positionMain - widthTab + "px";
                        }
                    }
                }

                // Не дает переместить первый слайд за границы экрана
                if (positionMain > accordeon.offsetWidth - widthTab) {
                    positionMain = accordeon.offsetWidth - widthTab;
                    accordeonBlock[i].style.right = positionMain + "px";
                    accordeonWrapper[i].style.width = positionMain - positionSecond + "px";
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
            } else if (i == 1) {  
                positionSecond = window.screen.width - (clientX - firstX + firstPositionSecond + accordeonBlock[i].offsetWidth);
                accordeonBlock[i].style.right = positionSecond + 'px';
                accordeonWrapper[i].style.width = positionSecond - positionThird + "px";
                accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                
                // Контролирует перемещение второго слайда
                // Не дает переместить второй слайдер дальше первого
                if (positionSecond > positionMain - widthTab) {
                    accordeonWrapper[0].style.width = positionSecond + widthTab + "px";
                    positionMain = positionSecond + widthTab;
                    accordeonBlock[0].style.right = positionMain + "px";
                    // Не дает переместить первый и второй слайды за границы экрана
                    if (positionMain > accordeon.offsetWidth - widthTab) {
                        positionMain = accordeon.offsetWidth - widthTab;
                        accordeonBlock[0].style.right = positionMain + "px";
                        accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                        positionSecond = positionMain - widthTab;
                        accordeonBlock[i].style.right = positionSecond + "px";
                        accordeonWrapper[i].style.width = positionSecond - positionThird + "px";
                    }
                }

                // Не дает переместить второй слайдер за третий
                if (positionSecond < positionThird + widthTab) {
                    accordeonWrapper[2].style.width = positionSecond + "px";
                    positionThird = positionSecond - widthTab;
                    accordeonBlock[2].style.right = positionThird + "px";
                    // Не дает переместить второй и третий слайды за границы экрана
                    if (positionThird < 0) {
                        positionThird = 0;
                        accordeonBlock[2].style.right = positionThird + "px";
                        accordeonWrapper[2].style.width = widthTab + "px";
                         positionSecond = positionThird + widthTab;
                        accordeonBlock[1].style.right = positionSecond + "px";
                        accordeonWrapper[1].style.width = positionSecond + "px";
                    }
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
            

                if (accordeonWrapper[0].offsetWidth >= positionMain - positionSecond) {
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                }
            } else if (i == 2) {
                
                    positionThird = window.screen.width - (clientX - firstX + firstPositionThird + accordeonBlock[i].offsetWidth);
                    accordeonBlock[i].style.right = positionThird + 'px';
                    accordeonWrapper[i].style.width = positionThird + accordeonBlock[i].offsetWidth + "px";
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                    
                // Контролирует перемещение третьего слайда
                // Не дает переместить третий слайд дальше второго
                if (positionThird > positionSecond - widthTab) {
                    accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                    positionSecond = positionThird + widthTab;
                    accordeonBlock[1].style.right = positionSecond + "px";
                    accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                    // Не дает переместить третий и второй слайды дальше первого
                    if (positionSecond > positionMain - widthTab) {
                        accordeonWrapper[0].style.width = positionMain - positionSecond - (widthTab * 2) + "px";
                        positionMain = positionSecond + widthTab;
                        accordeonBlock[0].style.right = positionMain + "px";
                        // Не дает переместить слайды за границы экрана слева
                        if (positionMain > accordeon.offsetWidth - widthTab) {
                            positionMain = accordeon.offsetWidth - widthTab;
                            accordeonBlock[0].style.right = positionMain + "px";
                            accordeonWrapper[0].style.width = positionMain - positionSecond + "px";
                            positionSecond = positionMain - widthTab;
                            accordeonBlock[1].style.right = positionSecond + "px";
                            accordeonWrapper[1].style.width = positionSecond - positionThird + "px";
                            positionThird = positionSecond - widthTab;
                            accordeonBlock[i].style.right = positionThird + "px";
                            accordeonWrapper[i].style.width = positionThird + widthTab + "px";
                        }
                    }
                }

                // Не дает переместить третий слайд за границы экрана
                if (positionThird < 0) {
                    positionThird = 0;
                    accordeonBlock[i].style.right = positionThird + "px";
                    accordeonWrapper[i].style.width = widthTab + "px";
                    accordeonWrapper[1].style.width = positionSecond + "px";
                }

                // Контролирует размер слайдов
                // Не дает сделать слайды меньше минимума
                if (accordeonWrapper[0].offsetWidth < widthTab) {
                    accordeonWrapper[0].style.width = widthTab + "px";
                }

                if (accordeonWrapper[1].offsetWidth < widthTab) {
                    accordeonWrapper[1].style.width = widthTab + "px";
                }
                
                if (accordeonWrapper[2].offsetWidth < widthTab) {
                    accordeonWrapper[2].style.width = widthTab + "px";
                }
                
            }
        }
      
        
        function onTouchMove(event) {
            for (let j = 0; j < event.changedTouches.length; j++) {
                moveAtTouch(event.changedTouches[j].clientX);
            }
        }
      
        document.addEventListener('touchmove', onTouchMove);

        document.ontouchend = function() {
            document.removeEventListener('touchmove', onTouchMove);
            document.ontouchend = null;
        };
      
      };
      
      
}

for (let i = 0; i < accordeonWrapper.length; i ++) {
    for(let j = 0; j < 3 * (i + 1); j++) {
        let tabRight = window.getComputedStyle(tab[j], null).getPropertyValue("right");
        tabRight = tabRight.replace("px", "");
        tabRight = accordeon.offsetWidth - parseInt(tabRight);
        if (tabRight >= accordeonWrapper[i].offsetWidth) {
            if (j < 6)
            tab[j].style.opacity = "0";
        } else {
            if (i == 0 || (i == 1 && j < 3) || (i == 2 && j > 3 && j < 6))
            tab[j].style.opacity = "100";
        }
    }
}



for (let i = 0; i < tab.length; i++) {
    tab[i].ontouchstart = function(event) {
        if (tabOffer[i].style.opacity == "100") {
            tabOffer[i].style.display = "none";
            tabOffer[i].style.transition = "500ms";
            tabOffer[i].style.opacity = "0";
            tabOffer[i].style.transform = "translateY(20px)";
            tabOffer[i].style.zIndex = "-1";
            console.log("HM");
        } else {
            tabOffer[i].style.display = "block";
            tabOffer[i].style.transition = "500ms";
            tabOffer[i].style.opacity = "100";
            tabOffer[i].style.transform = "translateY(0px)";
            tabOffer[i].style.zIndex = "1";
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
            console.log("HM");
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
const scrollUp = document.getElementById("scroll-up");
const scrollUpArrow = document.getElementById("scroll-up__arrow");
var time;
function up() {
	var top = window.scrollY;
	if(top > 0) {
		window.scrollBy(0, -10000);
		time = setTimeout('up()', 500);
	} else clearTimeout(time);
	return false;
}

scrollUp.onclick = function() {
    up();
}

const achievementsHeadSection = document.getElementsByClassName("achievements__table__head__section");
const achievementsBodySection = document.getElementsByClassName("achivements__table__body__row__section");

for (let i = 0; i < achievementsBodySection.length; i++) {
    achievementsBodySection[i].onmouseover = function() {
        achievementsHeadSection[i].style.backgroundColor = "#0869c9";
        achievementsBodySection[i].style.background = "linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)";
        achievementsBodySection[i].style.backdropFilter = "blur(24px)";
    }

    achievementsHeadSection[i].onmouseover = function() {
        achievementsHeadSection[i].style.backgroundColor = "#0869c9";
        achievementsBodySection[i].style.background = "linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)";
        achievementsBodySection[i].style.backdropFilter = "blur(24px)";
    }

    achievementsBodySection[i].onmouseout = function() {
        achievementsHeadSection[i].style.backgroundColor = "#328ae3";
        achievementsBodySection[i].style.background = "transparent";
        achievementsBodySection[i].style.backdropFilter = "blur(0)";
    }

    achievementsHeadSection[i].onmouseout = function() {
        achievementsHeadSection[i].style.backgroundColor = "#328ae3";
        achievementsBodySection[i].style.background = "transparent";
        achievementsBodySection[i].style.backdropFilter = "blur(0)";
    }
}

// Смена стиля кнопки онлайн поддержки
const solutions = document.getElementById("solutions");
const footer = document.getElementById("footer");
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

// Фиксированное положение для кнопки онлайн поддержки
window.onscroll = function() {
    if (window.scrollY - (window.innerHeight) >= solutions.getBoundingClientRect().top) {
        onlineSupport.style.position = "fixed";
        onlineSupportAlternate.style.position = "fixed";
        scrollUp.style.position = "fixed";
    } else if (window.scrollY - (window.innerHeight) < solutions.getBoundingClientRect().top) {
        onlineSupport.style.position = "absolute";
        onlineSupportAlternate.style.position = "absolute";
        scrollUp.style.position = "absolute";
    }

    if (window.innerHeight >= footer.getBoundingClientRect().top) {
            scrollUp.classList.add("scroll-up__footer");
            scrollUpArrow.src = "img/Main/upFooter.svg";
        } else if (window.innerHeight < footer.getBoundingClientRect().top) {
            scrollUp.classList.remove("scroll-up__footer");
            scrollUpArrow.src = "img/Main/up.svg";
        }
}
