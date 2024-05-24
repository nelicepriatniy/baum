

let mobbtn = document.querySelector('.menuSvg');
let menu = document.querySelector('.header-bottom');

mobbtn.addEventListener('click', function () {
    mobbtn.classList.toggle('active')
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('noScroll')
    document.querySelector('html').classList.toggle('noScroll')
})
let mobbtnb = document.querySelectorAll('.lineb');
mobbtnb.forEach(element => {
    element.addEventListener('click', function () {
        mobbtn.classList.toggle('active')
        menu.classList.toggle('active');
        document.querySelector('body').classList.toggle('noScroll')
    })
});


window.onscroll = () => {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active')
    } else {
        document.querySelector('header').classList.remove('active')
    }
}



function offsetPosition(element) {
    var offsetLeft = 0, offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop += element.offsetTop;
    } while (element = element.offsetParent);
    return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollbtn');  //класс кнопок для скролла
scrollBtn.forEach(el => {
    let elem = el;
    el.addEventListener('click', function () {
        let data = elem.getAttribute('data-b');
        let block = document.querySelector(data);
        let offset = offsetPosition(block);
        window.scrollTo({
            top: offset - 100,
            behavior: 'smooth',

        });
        console.log(offset)
    })
});


const swiper = new Swiper('.product-slider', {
    speed: 400,
    // loop: true,
    navigation: {
        nextEl: '.product-slider-arr-next',
        prevEl: '.product-slider-arr-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

        },
        1000: {
            spaceBetween: 24,
            slidesPerView: 2,
            pagination: {
                enabled: false,
            },
        },
    }
});


let questions = document.querySelectorAll('.product-faq-item'); //вставляем class блока с вопросом
if (questions.length > 0) {
    for (let i = 0; questions.length > i; i++) {
        questions[i].onclick = () => {
            questions[i].classList.toggle('active')
        }
    }
}

//корзина

let cartList = [
    {
        img: './media/card/1.png',
        name: 'Перкуссивный массажер G800',
        garant: 'Гарантия 2 года',
        count: 1,
        price: 13000,
        id: 1,
    },
    {
        img: './media/card/1.png',
        name: 'Перкуссивный массажер G801',
        garant: 'Гарантия 2 года',
        count: 1,
        price: 13000,
        id: 12,
    },
    {
        img: './media/card/1.png',
        name: 'Перкуссивный массажер G802',
        garant: 'Гарантия 2 года',
        count: 1,
        price: 13000,
        id: 123,
    },
]

let cardBlock = document.querySelector('.card-modal');

const renderCartItem = (img, name, garant, count, price, id) => {
    return (`
    
    <div class="card-product" data-id=`+ id + `>
        <svg class="card-product-delete" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.34375 1L11.3438 11M1.34375 11L11.3438 1" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <img src="` + img + `" alt="" class="card-product-img">
        <div class="card-product-info">
            <div class="card-product-info-top">
                <p class="card-product-info-heading">`+ name + `</p>
                <p class="card-product-info-garant">`+ garant + `</p>
            </div>
            <div class="card-product-info-btm">
                <p class="card-product-info-btn-coll">`+ count + ` шт.</p>
                <p class="card-product-info-btn-price">`+ price + ` ₽</p>
            </div>
        </div>
    </div>
    `)
}
let cardWrapper = cardBlock.querySelector('.card-wrapper-products');
let cartGlobalId = 5;


let itogPrice = 0;
cardWrapper = cardBlock.querySelector('.card-wrapper-products');
cardWrapper.innerHTML = '';
if (cartList.length > 0) {
    for (let i = 0; cartList.length > i; i++) {
        if (cartList[i] != undefined) {
            cardWrapper.insertAdjacentHTML("afterbegin", renderCartItem(cartList[i].img, cartList[i].name, cartList[i].garant, cartList[i].count, cartList[i].price, cartList[i].id))
        }
        if (cartList[i] != undefined) {
            itogPrice = itogPrice + cartList[i].price;
        }
    }
}

setInterval(() => {

    if (cardBlock) {
        let cardCount = cardBlock.querySelector('.card-heading-text-num');
        let cardItog = cardBlock.querySelector('.card-price-num');
        let cartDeleteAll = cardBlock.querySelector('.card-delete-all');

        cardItog.innerHTML = itogPrice + '₽'
        cardCount.innerHTML = '(' + cartList.length + ')';

        cartDeleteAll.onclick = () => {
            cartList = [];
            cardWrapper.innerHTML = '';
            itogPrice = 0;
            cardItog.innerHTML = itogPrice + '₽'
            // cardBlock.classList.remove('active')
        }
        let allProducts = cardBlock.querySelectorAll('.card-product');
        if (allProducts.length > 0) {
            for (let i = 0; allProducts.length > i; i++) {
                let itemId = allProducts[i].getAttribute('data-id');
                let productDelete = allProducts[i].querySelector('.card-product-delete');
                productDelete.onclick = () => {
                    cardWrapper = cardBlock.querySelector('.card-wrapper-products');
                    cardWrapper.innerHTML = '';
                    itogPrice = 0;
                    for (let j = 0; cartList.length > j; j++) {
                        if (itemId == cartList[j].id) {
                            cartList.splice(j, 1)
                            // delete cartList[j]
                        }
                    }
                    if (cartList.length > 0) {
                        for (let m = 0; cartList.length > m; m++) {
                            if (cartList[m] != undefined) {
                                cardWrapper.insertAdjacentHTML("afterbegin", renderCartItem(cartList[m].img, cartList[m].name, cartList[m].garant, cartList[m].count, cartList[m].price, cartList[m].id))
                            }
                            if (cartList[m] != undefined) {
                                itogPrice = itogPrice + cartList[m].price;
                            }
                        }
                    }
                    allProducts = cardBlock.querySelectorAll('.card-product');
                    cardItog.innerHTML = itogPrice + '₽'
                    cardCount.innerHTML = '(' + cartList.length + ')';

                }
            }
        }
    }
    let addToCard = document.querySelectorAll('.product-button-add-new');
    if(addToCard.length > 0) {
        for(let i = 0; addToCard.length > i; i++) {
            addToCard[i].onclick = ()=>{
                // cardBlock.classList.add('active')
                for(let j = 0; cartList.length > j; j++) {
                    if(cartList[j].id === Number(addToCard[i].getAttribute('data-id'))) {
                        cartList.splice(j, 1)
                    }
                }
                cartList.push({
                    img: addToCard[i].getAttribute('data-img'),
                    name: addToCard[i].getAttribute('data-name'),
                    garant: addToCard[i].getAttribute('data-garant'),
                    count: addToCard[i].getAttribute('data-count'),
                    price:  Number(addToCard[i].getAttribute('data-price')),
                    id: Number(addToCard[i].getAttribute('data-id')),
                })
                cardWrapper = cardBlock.querySelector('.card-wrapper-products');
                cardWrapper.innerHTML = '';
                if (cartList.length > 0) {
                    for (let i = 0; cartList.length > i; i++) {
                        if (cartList[i] != undefined) {
                            cardWrapper.insertAdjacentHTML("afterbegin", renderCartItem(cartList[i].img, cartList[i].name, cartList[i].garant, cartList[i].count, cartList[i].price, cartList[i].id))
                        }
                        if (cartList[i] != undefined) {
                            itogPrice = itogPrice + cartList[i].price;
                        }
                    }
                }
            }
        }
    }
    if(document.querySelector('.header-top-card-current')) {
        document.querySelector('.header-top-card-current').innerHTML = cartList.length
        if(cartList.length === 0) {
            document.querySelector('.header-top-card-current').classList.add('notActive')
        } else {
            document.querySelector('.header-top-card-current').classList.remove('notActive')

        }
    }
    
}, 100)

// document.onclick = ()=>{
//     for (let m = 0; cartList.length > m; m++) {
//         console.log(cartList[m]);
//     }
// }

let cardActivator = document.querySelectorAll('.header-top__cart-open');


for(let i = 0; cardActivator.length > i; i++) {
    cardActivator[i].onclick = ()=>{
        cardBlock.classList.add('active')
        console.log(123);
    }
}

let cardDeActivator = document.querySelectorAll('.header-top__cart-close');


for(let i = 0; cardDeActivator.length > i; i++) {
    cardDeActivator[i].onclick = ()=>{
        cardBlock.classList.remove('active')
        console.log(123);
    }

}


let cardBlock1 = document.querySelector('.cardforpayment');
let cardWrapper1 = cardBlock1.querySelector('.card-wrapper-products');


let itogPrice1 = 0;
cardWrapper1 = cardBlock1.querySelector('.card-wrapper-products');
cardWrapper1.innerHTML = '';
if (cartList.length > 0) {
    for (let i = 0; cartList.length > i; i++) {
        if (cartList[i] != undefined) {
            cardWrapper1.insertAdjacentHTML("afterbegin", renderCartItem(cartList[i].img, cartList[i].name, cartList[i].garant, cartList[i].count, cartList[i].price, cartList[i].id))
        }
        if (cartList[i] != undefined) {
            itogPrice1 = itogPrice1 + cartList[i].price;
        }
    }
}

setInterval(() => {

    if (cardBlock1) {
        let cardCount2 = cardBlock1.querySelector('.card-heading-text-num');
        // let cardItog2 = cardBlock1.querySelector('.card-price-num');
        let cartDeleteAll1 = cardBlock1.querySelector('.card-delete-all');

        // cardItog2.innerHTML = itogPrice + '₽'
        cardCount2.innerHTML = '(' + cartList.length + ')';

        cartDeleteAll1.onclick = () => {
            // cartList = [];
            // cardWrapper1.innerHTML = '';
            // itogPrice1 = 0;
            // cardItog2.innerHTML = itogPrice1 + '₽'
            // cardBlock.classList.remove('active')
            alert('Вы точно хотите изменить состав заказа? В этом случае все несохраненные данные будут потеряны, и оформление придётся начать сначала')
        }
        let allProducts1 = cardBlock1.querySelectorAll('.card-product');
        if (allProducts1.length > 0) {
            for (let i = 0; allProducts1.length > i; i++) {
                let itemId1 = allProducts1[i].getAttribute('data-id');
                let productDelete1 = allProducts1[i].querySelector('.card-product-delete');
                productDelete1.onclick = () => {
                    cardWrapper1 = cardBlock1.querySelector('.card-wrapper-products');
                    cardWrapper1.innerHTML = '';
                    itogPrice1 = 0;
                    for (let j = 0; cartList.length > j; j++) {
                        if (itemId1 == cartList[j].id) {
                            cartList.splice(j, 1)
                            // delete cartList[j]
                        }
                    }
                    if (cartList.length > 0) {
                        for (let m = 0; cartList.length > m; m++) {
                            if (cartList[m] != undefined) {
                                cardWrapper1.insertAdjacentHTML("afterbegin", renderCartItem(cartList[m].img, cartList[m].name, cartList[m].garant, cartList[m].count, cartList[m].price, cartList[m].id))
                            }
                            if (cartList[m] != undefined) {
                                itogPrice1 = itogPrice1 + cartList[m].price;
                            }
                        }
                    }
                    allProducts1 = cardBlock1.querySelectorAll('.card-product');
                    // cardItog2.innerHTML = itogPrice1 + '₽'
                    cardCount2.innerHTML = '(' + cartList.length + ')';

                }
            }
        }
    }
    let addToCard = document.querySelectorAll('.product-button-add-new');
    if(addToCard.length > 0) {
        for(let i = 0; addToCard.length > i; i++) {
            addToCard[i].onclick = ()=>{
                cardBlock1.classList.add('active')
                for(let j = 0; cartList.length > j; j++) {
                    if(cartList[j].id === Number(addToCard[i].getAttribute('data-id'))) {
                        cartList.splice(j, 1)
                    }
                }
                cartList.push({
                    img: addToCard[i].getAttribute('data-img'),
                    name: addToCard[i].getAttribute('data-name'),
                    garant: addToCard[i].getAttribute('data-garant'),
                    count: addToCard[i].getAttribute('data-count'),
                    price:  Number(addToCard[i].getAttribute('data-price')),
                    id: Number(addToCard[i].getAttribute('data-id')),
                })
                cardWrapper1 = cardBlock1.querySelector('.card-wrapper-products');
                cardWrapper1.innerHTML = '';
                if (cartList.length > 0) {
                    for (let i = 0; cartList.length > i; i++) {
                        if (cartList[i] != undefined) {
                            cardWrapper1.insertAdjacentHTML("afterbegin", renderCartItem(cartList[i].img, cartList[i].name, cartList[i].garant, cartList[i].count, cartList[i].price, cartList[i].id))
                        }
                        if (cartList[i] != undefined) {
                            itogPrice1 = itogPrice1 + cartList[i].price;
                        }
                    }
                }
            }
        }
    }
}, 100)
document.querySelector('.price-add-products').innerHTML = itogPrice1 + '₽'

let dostavkaPrice = Number(document.querySelector('.dostavkaPrice').getAttribute('data-dostavka-price'))

document.querySelector('.price-itog-num').innerHTML = itogPrice1 + dostavkaPrice + '₽'



let forms = document.querySelectorAll('.formInputs') //класс форм
function formCheck(item) {
    if (item) {
        let childInp = item.querySelectorAll('.top-form__input'); //класс инпутов формы
        let button = item.querySelector('.top-form__button'); //класс кнопки формы
        button.onclick = () => {
            for (let i = 0; i < childInp.length; i++) {
                if (!childInp[i].value) {
                    childInp[i].classList.add('red-flag') //добавляем класс красных инпутов
                } else {
                    childInp[i].classList.remove('red-flag') //убираем класс красных инпутов
                }
            }
        }
    }
}

for (let i = 0; i < forms.length; i++) {
    formCheck(forms[i])
}