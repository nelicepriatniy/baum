

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
        img: './../media/card/1.png',
        name: 'Перкуссивный массажер G800',
        garant: 'Гарантия 2 года',
        count: 1,
        price: 13000,
        id: 1,
    },
    {
        img: './../media/card/1.png',
        name: 'Перкуссивный массажер G801',
        garant: 'Гарантия 2 года',
        count: 1,
        price: 13000,
        id: 12,
    },
    {
        img: './../media/card/1.png',
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



setInterval(() => {

    if (cardBlock) {
        let cardCount = cardBlock.querySelector('.card-heading-text-num');
        let cardItog = cardBlock.querySelector('.card-price-num');
        let cartDeleteAll = cardBlock.querySelector('.card-delete-all');
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
                cardBlock.classList.add('active')
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
            }
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