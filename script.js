let Menuemail = document.querySelector('.navbar-email')
let DesktopMenu = document.querySelector('.desktop-menu')
let carritoMenu = document.querySelector('.navbar-shopping-cart')
let productdetailIconx = document.querySelector('.product-detail-close')

let Menu3rayas = document.querySelector('.menu')
let Menumobile = document.querySelector('.mobile-menu')
let asidebici = document.querySelector('.product-detail')
let cardscontainer = document.querySelector('.cards-container')
let productdetailcontainer = document.querySelector('.product-detail-secundary ')

Menuemail.addEventListener('click', lemenudesktop);
Menu3rayas.addEventListener('click', movilenMenu);
carritoMenu.addEventListener('click', bicisnuevas);
productdetailIconx.addEventListener('click', closeproducdatailaside);

/*desktop en menu*/
function lemenudesktop() {
    DesktopMenu.classList.toggle('inactive')
}


/*movil en el menu*/
function movilenMenu() {
    Menumobile.classList.toggle('inactive')
    asidebici.classList.add('inactive')
    productdetailcontainer.classList.add('inactive')
   
   
}

/*aside bicis nuevas*/
function bicisnuevas() {
    asidebici.classList.toggle('inactive')
    Menumobile.classList.add('inactive')
    productdetailcontainer.classList.add('inactive')
  

}
function openproducdetailaside (){
    productdetailcontainer.classList.toggle('inactive')
    asidebici.classList.toggle('inactive')
}



function closeproducdatailaside (){
    productdetailcontainer.classList.add('inactive')
    asidebici.classList.add('inactive')
    Menumobile.classList.add('inactive')
   
}


let productlist = [];
productlist.push({
    name: 'bike',
    price: '120',
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productlist.push({
    name: 'compu',
    price: '220',
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productlist.push({
    name: 'avion',
    price: '320',
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})



function renderproduct (arr){
    for (product of arr){
        const productcart = document.createElement('div')
        productcart.classList.add('product-card')
    
        const productimg = document.createElement('img')
        productimg.setAttribute('src',product.image)
       productimg.addEventListener('click',openproducdetailaside)

        const productinfo = document.createElement('div')
        productinfo.classList.add('product-info')
    
       
    
        const productinfodiv = document.createElement('div');
        const productprice = document.createElement('p');
        productprice.innerHTML = '$ ' + product.price; 
        const productname = document.createElement('p');
        productname.innerHTML = product.name;
    
        productinfodiv.append(productprice,productname)
        
    
        const productinfofigure = document.createElement('figure')
        const productimgcart = document.createElement('img');
        productimgcart.setAttribute( 'src', './icons/bt_add_to_cart.svg');
    
        productinfofigure.appendChild(productimgcart);
    
        productinfo.append(productinfodiv,productinfofigure),
    
    
        productcart.appendChild(productimg);
        productcart.appendChild(productinfo);
    
        cardscontainer.appendChild(productcart);
    
    }
}

renderproduct(productlist);
