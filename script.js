let Menuemail = document.querySelector('.navbar-email')
let DesktopMenu = document.querySelector('.desktop-menu')
let carritoMenu = document.querySelector('.navbar-shopping-cart')

let Menu3rayas = document.querySelector('.menu')
let Menumobile = document.querySelector('.mobile-menu')
let asidebici = document.querySelector('.product-detail')

Menuemail.addEventListener('click', lemenudesktop);
Menu3rayas.addEventListener('click', movilenMenu);
carritoMenu.addEventListener('click', bicisnuevas);

/*desktop en menu*/
function lemenudesktop() {
    DesktopMenu.classList.toggle('inactive')
}

/*movil en el menu*/
function movilenMenu() {
    asidebici.classList.add('inactive')
    Menumobile.classList.toggle('inactive')
}

/*aside bicis nuevas*/
function bicisnuevas() {
    Menumobile.classList.add('inactive')
    asidebici.classList.toggle('inactive')
}

