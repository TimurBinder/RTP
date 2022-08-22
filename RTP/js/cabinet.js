// Профиль ---------------------------------------------
//Переменные для Профиля
const photoPerson = document.getElementById("photo-person__input");
const photoPersonVisible = document.getElementById("photo-person-visible");
const profilePassword = document.getElementsByClassName("profile-edit__input-password");
const cabinetTitle = document.getElementsByClassName("body-title__cabinet");
const cabinetSwitch = document.getElementsByClassName("body-title__cabinet__line-active");
const profileEdit = document.getElementsByClassName("profile-edit");
const profileShopping = document.getElementsByClassName("profile-shopping");
const payer = document.getElementsByClassName("body-head__payer-text");
const shoppingLink = document.getElementById("shopping");
const personalOfficeLink = document.getElementById("personal-office");
const shoppingRow = document.getElementsByClassName("profile-shopping__table__row-table__body");
const shoppingTableNum = document.getElementsByClassName("shopping-logo");
const shoppingTableHidden = document.getElementsByClassName("profile-shopping__table__pocket");
const paid = document.getElementsByClassName("paid");
const unpaid = document.getElementsByClassName("unpaid");
const payment = document.getElementsByClassName("profile-shopping__table__row__section__payment");
const performed = document.getElementsByClassName("performed");
const accepted = document.getElementsByClassName("accepted");
const unfullfiled = document.getElementsByClassName("unfullfiled");
const selectOption = document.getElementsByClassName("form-juridical__option");
const selectEdit = document.getElementsByClassName("profile-edit__input profile-edit__select");
const inputHead = document.getElementsByClassName("log-in__input-caption");
const input = document.getElementsByClassName("log-in__input");
const photoForm = document.getElementsByClassName("profile-edit__select-form");
const photoText = document.getElementsByClassName("profile-edit__select-file-text");
const photoBorder = document.getElementsByClassName("profile-edit__photo-border");
const select = document.getElementsByClassName("profile-edit__select");
const selectText = document.getElementsByClassName("profile-edit__select-caption-text");
const selectCaption = document.getElementsByClassName("select-caption");
const selectBlock = document.getElementsByClassName("profile-edit__select-block");
let mouseClick = 0;
const seniority = document.getElementById("profile-edit__seniority");
const seniorityUp = document.getElementById("seniority-up");
const seniorityDown = document.getElementById("seniority-down");
const seniorityCaption = document.getElementById("seniority-caption");
const shopTableMobile = document.getElementById("profile-shopping__table-mobile");
const shopRowMobile = document.getElementsByClassName("profile-shopping__table__row-wrapper-mobile");
const shopRowPocketMobile = document.getElementsByClassName("profile-shopping__table__pocket-mobile");
const shopPocketBackMobile = document.getElementsByClassName("profile-shopping__table__pocket__back-mobile");
let seniorityCount = 0;
const mobileSwitch = document.getElementsByClassName("mobile__switch__profile");

// Стилизация для демонстрации "Статус" и "Оплата" 
paid[3].style.display = 'none'; 
performed[3].style.display = 'none';
unpaid[3].style.display = 'inline';
accepted[3].style.display = 'inline';

// paid[5].style.display = 'none'; 
// performed[5].style.display = 'none';
// unpaid[5].style.display = 'inline';
// accepted[5].style.display = 'inline';

// Работа со строкой "Профессиональный стаж"
seniorityUp.onclick = function() {
    seniorityCount++;
    seniority.value = seniorityCount + " лет";
    seniority.style.border = "1px solid #328ae3";
    seniorityCaption.style.display = "block";
}

seniorityDown.onclick = function() {
    seniorityCount--;
    seniority.style.border = "1px solid #328ae3";
    if (seniorityCount < 0) {
        seniorityCount = 0;
    }
    seniority.value = seniorityCount + " лет";
    seniorityCaption.style.display = "block";
}

//Показать/скрыть пароль
function showPasswordProfile(ind) {
    if (profilePassword[ind].getAttribute('type') == 'password') {
        profilePassword[ind].setAttribute('type', 'text');
    } else {
        profilePassword[ind].setAttribute('type', 'password');
    }
}

//Изменить пароль
function changeProfilePassword(ind) {
    profilePassword[ind].removeAttribute("readonly");
}

//Переход "Личный кабинет"/"Мои покупки"
function changeCabinet() { //По нажатии на слайдер
    cabinetSwitch[0].style.transition = "200ms";
    if (cabinetTitle[0].classList.contains("body-title__cabinet-activate")) {
        cabinetTitle[0].classList.remove("body-title__cabinet-activate");
        cabinetTitle[1].classList.add("body-title__cabinet-activate");
        cabinetSwitch[0].style.transform = "translateX(22px)";
        profileEdit[0].style.display = "none";
        profileShopping[0].style.display = "block";
        payer[0].style.display = "none";
        shoppingLink.style.display = "inline";
        personalOfficeLink.style.display = "none";
    } else if (cabinetTitle[1].classList.contains("body-title__cabinet-activate")) {
        cabinetTitle[1].classList.remove("body-title__cabinet-activate");
        cabinetTitle[0].classList.add("body-title__cabinet-activate");
        cabinetSwitch[0].style.transform = "translateX(0)";
        profileEdit[0].style.display = "block";
        profileShopping[0].style.display = "none";
        payer[0].style.display = "block";
        shoppingLink.style.display = "none";
        personalOfficeLink.style.display = "inline";
    }
}

function changeCabinetInd(ind) { //По нажатии на название
    cabinetSwitch[0].style.transition = "200ms";
    if (ind == 1) {
        cabinetTitle[0].classList.remove("body-title__cabinet-activate");
        cabinetTitle[1].classList.add("body-title__cabinet-activate");
        cabinetSwitch[0].style.transform = "translateX(22px)";
        profileEdit[0].style.display = "none";
        profileShopping[0].style.display = "block";
        payer[0].style.display = "none";
        shoppingLink.style.display = "inline";
        personalOfficeLink.style.display = "none";
    } else if (ind == 0) {
        cabinetTitle[1].classList.remove("body-title__cabinet-activate");
        cabinetTitle[0].classList.add("body-title__cabinet-activate");
        cabinetSwitch[0].style.transform = "translateX(0)";
        profileEdit[0].style.display = "block";
        profileShopping[0].style.display = "none";
        payer[0].style.display = "block";
        shoppingLink.style.display = "none";
        personalOfficeLink.style.display = "inline";
    }
}

//Все внутренние таблицы с полной информацией покупки скрываются
for (let i = 0; i < shoppingTableHidden.length; i++) {
    shoppingTableHidden[i].style.display = 'none';
}



//Раскрыть внутреннюю таблицу 
for (let i = 0; i < shoppingRow.length; i++) {
    shoppingRow[i].onclick = function() {
        if (shoppingTableHidden[i].style.display == "none") {
            shoppingTableHidden[i].style.display = "block";
            shoppingRow[i].style.borderBottom = "none";
            shoppingTableNum[i].style.backgroundImage = "url('./img/Service/Icons/tableArrowDown.svg')";
        } else {
            shoppingTableHidden[i].style.display = "none";
            shoppingRow[i].style.borderBottom = "1px solid #b2b3b3";
            shoppingTableNum[i].style.backgroundImage = "url('./img/Service/Icons/tableArrowUp.svg')";
        }
        
    }
}

//Работа с инпутами 
for (let i = 0; i < input.length; i++) {
    input[i].oninput =  function() {
        if (!(input[i].classList.contains("profile-edit__textarea"))) {
            inputHead[i].style.display = "block";
        } 
    }
}

for (let i = 0; i < input.length; i++) {
    if (input[i] != "undefined") {
        input[i].onfocus = function() {
            if (!(input[i].classList.contains("profile-edit__textarea")) && !(input[i].classList.contains("profile-edit__seniority"))) {
                inputHead[i].style.display = "block";
                input[i].style.border = "none";
                input[i].style.backgroundImage = "";
                inputHead[i].style.color = "rgba(0, 0, 0, 0.6)";
                if (screen.width < 480) {
                    inputHead[i].style.transform = "translate(10px)"
                } else {
                inputHead[i].style.transform = "translate(5px 5px)";
                }
            }
        }

        input[i].onblur = function() {
            if (!(input[i].classList.contains("profile-edit__textarea")) && !(input[i].classList.contains("profile-edit__select")) && !(input[i].classList.contains("profile-edit__seniority"))) {
                inputHead[i].style.color = "#df0610";
                input[i].style.border = "1px solid #df0610";
                input[i].style.backgroundImage = "url('./img/Icons/inputErr.svg')";
                input[i].classList.add("log-in__input-hidden");
            } else if (input[i].classList.contains("profile-edit__select")) {
                input[i].style.border = "1px solid #df0610";
                inputHead[i].style.color = "#df0610";
            }
        }

        input[i].oninput = function() {
            inputHead[i].style.display = "block";
            if (input[i].value == "") {
                input[i].onblur = function() {
                    if(!(input[i].classList.contains("profile-edit__textarea")) && !(input[i].classList.contains("profile-edit__select")) && !(input[i].classList.contains("profile-edit__seniority"))) {
                        inputHead[i].style.color = "#df0610";
                        input[i].style.border = "1px solid #df0610";
                        input[i].style.backgroundImage = "url('./img/Icons/inputErr.svg')";
                    } else if (input[i].classList.contains("profile-edit__select")){
                        input[i].style.border = "1px solid #df0610";
                        inputHead[i].style.color = "#df0610";
                    } else {
                        input[i].style.backgroundImage = "";
                    }
                } 
            } else {
                input[i].onblur = function() {
                    if (!(input[i].classList.contains("profile-edit__select"))) {
                        inputHead[i].style.color = "#328ae3";
                        input[i].style.border = "1px solid #328ae3";
                        input[i].style.backgroundImage = "url('./img/Icons/inputTick.svg')";
                    }
                }
            }
        }
    }

}

// Работа с выбором фотографии
for (let i = 0; i < photoForm.length; i++) {
    photoForm[i].onchange = function(){
        photoText[i].style.visibility = "hidden";
        photoForm[i].style.visibility = "visible";
        photoBorder[i].style.border = "1px solid #328ae3";
    }
}

// Работа с селектами
for (let i = 0; i < select.length; i++) {
    select[i].onfocus = function() {
        select[i].value = "";
        selectText[i].style.visibility = "hidden";
        selectCaption[i].style.display = "block";
        select[i].style.border = "none";
        selectCaption[i].style.color = "rgba(0, 0, 0, 0.6)";
        if (screen.width < 480) {
            selectCaption[i].style.transform = "translate(40px)"
        } else {
            selectCaption[i].style.transform = "translate(5px 5px)";
        }
        select[i].style.backgroundImage = "url('./img/Service/Icons/selectUseUpArrow.svg')";
    }

    select[i].onclick = function() {
        mouseClick++;
        if((mouseClick % 2) == 0) {
            select[i].blur();
        }
        console.log(mouseClick);
    }
    
    select[i].onblur = function() {
        mouseClick = 0;
        if (select[i].value == "") {
            selectCaption[i].style.display = "block";
            selectCaption[i].style.color = "#df0610";
            select[i].style.border = "1px solid #df0610";
            selectText[i].style.visibility = "hidden";
            if (screen.width < 480) {
                selectCaption[i].style.transform = "translate(25px)"
            } else {
            selectCaption[i].style.transform = "translate(5px 5px)";
            }
            select[i].style.backgroundImage = "url('./img/Service/Icons/tableArrowDown.svg')";
        } else {
            selectCaption[i].style.display = "block";
            selectCaption[i].style.color = "#328ae3";
            select[i].style.border = "1px solid #328ae3";
            selectText[i].style.visibility = "hidden";
            select[i].style.backgroundImage = "url('./img/Service/Icons/selectUseDownArrow.svg')";
        }
        
    }
    select[i].onchange = function() {
        select[i].style.backgroundImage = "url('./img/Service/Icons/selectUseDownArrow.svg')";
        selectCaption[i].style.color = "#328ae3";
        select[i].style.border = "1px solid #328ae3";
        selectText[i].style.visibility = "hidden";
        // select[i].blur();
        select[i].onblur = function() {
            mouseClick = 0;
            if (select[i].value == "") {
                selectCaption[i].style.display = "block";
                selectCaption[i].style.color = "#df0610";
                select[i].style.border = "1px solid #df0610";
                selectText[i].style.visibility = "hidden";
                select[i].style.backgroundImage = "url('./img/Service/Icons/tableArrowDown.svg')";
            } else {
                selectCaption[i].style.display = "block";
                selectCaption[i].style.color = "#328ae3";
                select[i].style.border = "1px solid #328ae3";
                selectText[i].style.visibility = "hidden";
                select[i].style.backgroundImage = "url('./img/Service/Icons/selectUseDownArrow.svg')";
            }
            
        }
    }

}

//Переключатель на мобильной версии
function switchProfile(ind) {
    if (ind == 0) {
        profileEdit[0].style.display = "block";
        profileShopping[0].style.display = "none";
        mobileSwitch[0].classList.add("switch-log-activate");
        mobileSwitch[1].classList.remove("switch-log-activate");
    } else if (ind == 1) {
        profileShopping[0].style.display = "block";
        profileEdit[0].style.display = "none";
        mobileSwitch[1].classList.add("switch-log-activate");
        mobileSwitch[0].classList.remove("switch-log-activate");
    }
}

// Открытие полной информации о покупке
for (let i = 0; i < shopRowMobile.length; i++) {
    shopRowMobile[i].onclick = function() {
        shopTableMobile.style.display = "none";
        shopRowPocketMobile[i].style.display = "block";
    }
    // Закрытие полной информации о покупке
    shopPocketBackMobile[i].onclick = function() {
        shopTableMobile.style.display = "flex";
        shopRowPocketMobile[i].style.display = "none";
    }

}