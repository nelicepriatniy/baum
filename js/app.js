

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
            top: offset -100,
            behavior: 'smooth',
            
        });
        console.log(offset)
    })
});
