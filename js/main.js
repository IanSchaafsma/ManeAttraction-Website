const body = document.getElementById("body--js");
const menuButton = document.getElementById("nav__menu--js");;
const menu = document.getElementById("nav--js");
const menuList = document.getElementById("nav__list--js");
let menuIcon = document.getElementById("nav__menuIcon--js");

menuClicked = 0;

menuButton.onclick = function(){
    menu.classList.toggle("nav--menu");
    menuList.classList.toggle("nav__list--menu");
    

    if(menuClicked === 0){
        menuIcon.classList = "fa-solid fa-xmark";
        menuClicked = 1;
        body.style.overflow = "hidden";
    }
    else{
        menuIcon.classList = "fa-solid fa-bars";
        menuClicked = 0;
        body.style.overflow = "visible";
    }

}