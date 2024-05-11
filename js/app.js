

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
