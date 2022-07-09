const btnMenu = document.getElementById('btn-menu')
const nav = document.getElementById('nav')

btnMenu.addEventListener('click', () => {
    nav.className === 'active' ?  
        nav.classList.remove('active') : 
        nav.classList.add('active');
})