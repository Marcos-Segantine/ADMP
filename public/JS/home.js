/* MENU MOBILE */

const btnMenu = document.getElementById('btn-menu')
const nav = document.getElementById('nav')

btnMenu.addEventListener('click', () => {
    nav.className === 'active' ?  
        nav.classList.remove('active') : 
        nav.classList.add('active');
})

/* CARROSEL */

const slides = document.querySelectorAll('[data-js="slide-carrosel"]')
const nextBanner = document.getElementById('next_banner')
const previusBanner = document.getElementById('previus_banner')

let index = 0

nextBanner.addEventListener('click', () => {
    index === slides.length - 1 ? index = 0 : ++index
    
    slides.forEach(slide => {
        slide.classList.remove('banner_visible')
    })
    
    slides[index].classList.add('banner_visible')
})

previusBanner.addEventListener('click', () => {
    index === 0 ? 
        index = slides.length - 1 : --index
    
    slides.forEach(slide => {
        slide.classList.remove('banner_visible')
    })
    
    slides[index].classList.add('banner_visible')
})