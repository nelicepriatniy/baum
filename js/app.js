

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
    questions[0].classList.add('active')
    for (let i = 0; questions.length > i; i++) {
        questions[i].onclick = () => {
            questions[i].classList.toggle('active')
        }
    }
}