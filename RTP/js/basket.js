//Переменные для Корзины
const buyCount = document.getElementsByClassName("buy-count");
const buyCountCaption = document.getElementsByClassName("buy-count-caption");
const buyCountRemove = document.getElementsByClassName("buy-count__remove");
const buyCountAdd = document.getElementsByClassName("buy-count__add");
const buyPrice = document.getElementsByClassName("profile__basket__table__row__price");
const buyOldPrice = document.getElementsByClassName("profile__basket__table__row__old-price");
const buyTotalPrice = document.getElementsByClassName("profile__basket__table__row__total");
let buyCountInd = [];
const buyDelete = document.getElementsByClassName("profile__basket__table__row__delete-icon");
const buyItem = document.getElementsByClassName("profile__basket__table__row");
const buyItemMobile = document.getElementsByClassName("profile__basket__table__row-mobile");
const buyItemInd = document.getElementsByClassName("profile__basket__table__row-number");
const buyItemMobileInd = document.getElementsByClassName("profile__basket__table__row-number-mobile");
const basketTotalPrice = document.getElementById("basket__total__price");
const basketTotalDiscount = document.getElementById("basket__total__discount");
const basketTotalSum = document.getElementById("basket__total__sum");
const headerBasketCount = document.getElementById("basket-count");
const headerBasketSum = document.getElementById("person-basket__sum");
const headerBasketCountMobile = document.getElementById("basket-count-mobile");
let buyDeleteInd = 0; //Количество удалленых п
let totalPrice = 0; //Итоговая цена изначальная
let totalDiscount = 0; //Итоговая скидка изначальная
let buyItemLength = buyItem.length;

//Корзина
for (let i = 0; i < buyItem.length - 1; i++) { //Нумерация пунктов покупок
    buyItemInd[i].innerHTML = i + 1;
    headerBasketCount.innerHTML = i + 1;
    headerBasketSum.innerHTML = basketTotalSum.innerHTML;
}

for (let i = 0; i < buyItemMobile.length; i++) {
    buyItemMobileInd[i].innerHTML = i + 1;
    headerBasketCountMobile.innerHTML = i + 1;
}

for (let i = 0; i < buyDelete.length; i++) { //Удаление покупок
    buyDelete[i].onclick = function buyItemDelete() {
        let oldPrice = parseInt((buyOldPrice[i].innerHTML));
        let newPrice = parseInt((buyPrice[i].innerHTML));
        totalPrice = totalPrice - newPrice * buyCountInd[i];
        totalDiscount = totalDiscount - oldPrice * buyCountInd[i] + newPrice * buyCountInd[i] 
        basketTotalDiscount.innerHTML = totalDiscount;
        basketTotalPrice.innerHTML = totalPrice;
        basketTotalSum.innerHTML = totalPrice;
        buyItem[i+1].style.display = "none";
        buyDeleteInd++;
        headerBasketCount.innerHTML = buyCountInd.length - buyDeleteInd;
        headerBasketSum.innerHTML = totalPrice;
        for (let j = 0; j < buyDelete.length; j++) {
            if(j > i) { 
                buyItemInd[j].innerHTML = parseInt(buyItemInd[j].innerHTML) - 1;
            }
        }
    }
}

for (let i = 0; i < buyCountAdd.length; i++) { //Добавить количество
    if (buyCountInd.length < i + 1) {
        buyCountInd.push();
    }
    let price = 0;
    let oldPrice = parseInt((buyOldPrice[i].innerHTML));
    let newPrice = parseInt((buyPrice[i].innerHTML))
    price = parseInt(buyPrice[i].innerHTML);
    buyCountInd[i] = parseInt(buyCount[i].innerHTML);
    buyCountAdd[i].onclick = function() {
        totalPrice -= parseInt(buyTotalPrice[i].innerHTML);
        totalDiscount = totalDiscount - oldPrice * buyCountInd[i] + newPrice * buyCountInd[i];
        buyCountInd[i] += 1;
        buyCount[i].innerHTML = buyCountInd[i];
        buyCountCaption[i].innerHTML = buyCountInd[i];
        buyTotalPrice[i].innerHTML = (price * buyCountInd[i]) + " ₽";
        totalPrice += parseInt(buyTotalPrice[i].innerHTML);
        basketTotalPrice.innerHTML = totalPrice;
        totalDiscount = totalDiscount + oldPrice * buyCountInd[i] - newPrice * buyCountInd[i];
        basketTotalDiscount.innerHTML = totalDiscount;
        basketTotalSum.innerHTML = totalPrice;
        headerBasketSum.innerHTML = totalPrice;
    }
}

for (let i = 0; i < buyCountRemove.length; i++) { //Убавить количество
    let price = 0;
    let oldPrice = parseInt((buyOldPrice[i].innerHTML));
    let newPrice = parseInt((buyPrice[i].innerHTML));
    if (buyCountInd.length < i + 1) {
        buyCountInd.push();
    }
    price = parseInt(buyPrice[i].innerHTML);
    buyCountInd[i] = parseInt(buyCount[i].innerHTML);
    buyCountRemove[i].onclick = function() {
        totalPrice -= parseInt(buyTotalPrice[i].innerHTML);
        totalDiscount = totalDiscount - oldPrice * buyCountInd[i] + newPrice * buyCountInd[i];
        buyCountInd[i] -= 1;
        if (buyCountInd[i] < 0) {
            buyCountInd[i] = 0;
        }
        buyCount[i].innerHTML = buyCountInd[i];
        buyCountCaption[i].innerHTML = buyCountInd[i];
        buyTotalPrice[i].innerHTML = (price * buyCountInd[i]) + " ₽";
        totalPrice += parseInt(buyTotalPrice[i].innerHTML);
        basketTotalPrice.innerHTML = totalPrice;
        totalDiscount = totalDiscount + oldPrice * buyCountInd[i] - newPrice * buyCountInd[i];
        basketTotalDiscount.innerHTML = totalDiscount;
        basketTotalSum.innerHTML = totalPrice;
        headerBasketCount.innerHTML = buyCountInd.length;
        headerBasketSum.innerHTML = totalPrice;
    }
}



for (let i = 0; i < buyDelete.length; i++) { //Настройка итоговой цены
    totalPrice = totalPrice + parseInt(buyPrice[i].innerHTML) * buyCountInd[i];
    totalDiscount = totalDiscount + parseInt(buyOldPrice[i].innerHTML) * buyCountInd[i] - parseInt(buyPrice[i].innerHTML) * buyCountInd[i];
}

const buyCountMobile = document.getElementsByClassName("buy-count-mobile");
const buyCountMobileAdd = document.getElementsByClassName("buy-count__add-mobile");
const buyCountMobileRemove = document.getElementsByClassName("buy-count__remove-mobile");
const buyPriceMobile = document.getElementsByClassName("profile__basket__table__row__price-mobile");
const buySumMobile = document.getElementsByClassName("profile__basket__table__row__total-mobile");
const totalPriceMobile = document.getElementById("basket__total__price-mobile");
const totalSumMobile = document.getElementById("basket__total__sum-mobile");
let buyCountIndMobile = 0;
let totalPriceCountMobile = parseInt(totalPriceMobile.innerHTML);
// Мобильная версия
// Количество товара
for (let i = 0; i < buyCountMobile.length; i++) {
    buyCountMobileAdd[i].onclick = function() {
        totalPriceCountMobile = totalPriceCountMobile - parseInt(parseInt(buyPriceMobile[i].innerHTML) * parseInt(buyCountMobile[i].innerHTML));
        buyCountIndMobile = parseInt(parseInt(buyCountMobile[i].innerHTML) + parseInt(1));
        buyCountMobile[i].innerHTML = buyCountIndMobile; 
        buySumMobile[i].innerHTML = parseInt(buyPriceMobile[i].innerHTML * buyCountIndMobile);
        totalPriceCountMobile = totalPriceCountMobile + parseInt(parseInt(buyPriceMobile[i].innerHTML) * buyCountIndMobile);
        totalPriceMobile.innerHTML = totalPriceCountMobile;
        totalSumMobile.innerHTML = totalPriceCountMobile;
    }

    
    buyCountMobileRemove[i].onclick = function() {
        totalPriceCountMobile = totalPriceCountMobile - parseInt(parseInt(buyPriceMobile[i].innerHTML) * parseInt(buyCountMobile[i].innerHTML));
        buyCountIndMobile = parseInt(buyCountMobile[i].innerHTML - 1);
        if (buyCountIndMobile < 0) {
            buyCountIndMobile = 0;
        }
        buyCountMobile[i].innerHTML = buyCountIndMobile; 
        buySumMobile[i].innerHTML = parseInt(buyPriceMobile[i].innerHTML * buyCountIndMobile);
        totalPriceCountMobile = totalPriceCountMobile + parseInt(parseInt(buyPriceMobile[i].innerHTML) * buyCountIndMobile);
        totalPriceMobile.innerHTML = totalPriceCountMobile;
        totalSumMobile.innerHTML = totalPriceCountMobile;
    }
}


