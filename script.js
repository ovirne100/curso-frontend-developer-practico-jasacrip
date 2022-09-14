const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener("click",toggleDestokmenu);

function toggleDestokmenu (){
    
    desktopMenu.classList.toggle('inactive')
}

