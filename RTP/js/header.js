const logIn = document.getElementsByClassName("log-in");
const signIn = document.getElementsByClassName("sign-in");
const signInThanks = document.getElementsByClassName("sign-in__thanks");
const modalBg = document.getElementsByClassName("modal__log-in");
const signInRadio = document.getElementsByClassName("sign__in__radio");
const signInRadioText = document.getElementsByClassName("sign__in__radion__text");
const signInPassword = document.getElementById("sign-in__password");
const mobileBurger = document.getElementById("burger");
const mobileBurgerMenu = document.getElementById("burger-menu");
const mobileSubitemShopBlock = document.getElementById("burger-menu__subitem__wrap-shop");
const mobileShop = document.getElementById("mobile-item-shop");
const mobileLogIn = document.getElementById("mobile-item-log-in");
const mobileLogInBlock = document.getElementById("mobile__log-in__wrapper");
const mobileLogSwitch = document.getElementsByClassName("mobile__log-in__switch-log");
const mobileLogInWrap = document.getElementById("mobile__log-in");
const mobileSignInWrap = document.getElementById("mobile__sign-in");
const mobileLogInClose = document.getElementsByClassName("mobile_modal-img__close-block__img-close");
let checkedSignInInd = 0;
mobileSubitemShopBlock.style.display = "none";
mobileBurgerMenu.style.display = "none";

function openLogIn() {
    logIn[0].style.display = "flex";
    modalBg[0].style.display = "block";
}

function openSignIn() {
    signIn[0].style.display = "flex";
    logIn[0].style.display = "none";
}

function openSignInThanks() {
    signInThanks[0].style.display = "flex";
    signIn[0].style.display = "none";
}

// Кнопка закрытия блока
function closeLogIn() {
    logIn[0].style.display = "none";
    signInThanks[0].style.display = "none";
    signIn[0].style.display = "none";
    modalBg[0].style.display = "none";
}

// Выбор профиля при регистрации
function checkedSignIn(ind) {
    checkedSignInInd = ind;
    for (let i = 0; i < signInRadio.length; i++) {
        signInRadio[i].checked = false;  
    }
    signInRadio[checkedSignInInd].checked = true;
}

//Показать пароль
function showPassword() {
    if (signInPassword.getAttribute('type') == 'password') {
        signInPassword.setAttribute('type', 'text');
    } else {
        signInPassword.setAttribute('type', 'password');
    }
}

//Открыть/Закрыть меню
mobileBurger.onclick = function() {
    if (mobileBurgerMenu.style.display == "none") {
        mobileBurgerMenu.style.display = "flex";
        mobileBurger.src = "./img/Mobile/Icons/iconBurgerClose.svg";
    } else {
        mobileBurgerMenu.style.display = "none";
        mobileBurger.src = "./img/Mobile/Icons/iconBurger.svg";
    }
}

// Пункты мобильной версии шапки: Магазин
mobileShop.onclick = function() {
    if (mobileSubitemShopBlock.style.display == "none") {
        mobileSubitemShopBlock.style.display = "block";
    } else {
    mobileSubitemShopBlock.style.display = "none";
    }
}

// Открыть окно авторизации
mobileLogIn.onclick = function() {
    mobileLogInBlock.style.display = "flex";
    mobileBurgerMenu.style.display = "none";
    mobileBurger.src = "./img/Mobile/Icons/iconBurger.svg";
}

// Смена авторизация/регистрация
mobileLogSwitch[0].onclick = function() {
    mobileLogSwitch[1].classList.remove("switch-log-activate");
    mobileLogSwitch[0].classList.add("switch-log-activate");
    mobileLogInWrap.style.display = "block";
    mobileSignInWrap.style.display = "none";
}

mobileLogSwitch[1].onclick = function() {
    mobileLogSwitch[0].classList.remove("switch-log-activate");
    mobileLogSwitch[1].classList.add("switch-log-activate");
    mobileSignInWrap.style.display = "block";
    mobileLogInWrap.style.display = "none";
}

// Закрытие блока авторизации
for(let i = 0; i < mobileLogInClose.length; i++) {
    mobileLogInClose[i].onclick = function() {
        mobileLogInBlock.style.display = "none";
    }
}