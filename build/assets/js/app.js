
// Burger-menu --------------------------------------------

const menu = document.querySelector('.nav_burger');
const openMenuButton = document.querySelector('.nav__burger_open');
const closeMenuButton = document.querySelector('.nav__burger_close');
const blackout = document.querySelector('.header__blackout');
console.log(openMenuButton)

function openBurgerMenu(){
    menu.classList.add('active');
    blackout.classList.add('active');
    openMenuButton.style.transform = 'rotate(90deg)';
    closeMenuButton.style.transform = '';
}

function closeBurgerMenu(){
    menu.classList.remove('active');
    blackout.classList.remove('active');
    closeMenuButton.style.transform = 'rotate(90deg)';
    openMenuButton.style.transform = '';
}

openMenuButton.onclick = function() {
    openBurgerMenu()
}

closeMenuButton.onclick = function() {
    closeBurgerMenu()
}

const closeMenuBurger = document.querySelector('.nav__item_burger');

closeMenuBurger.onclick = function(event) {
    event.preventDefault();

    closeBurgerMenu()
}

const blackoutParent = document.querySelector('.header__burger');

blackoutParent.onclick = function(event) {
    if (event.target === blackout){
        closeBurgerMenu()
    }   return
}

const disabledMenuLinks = document.querySelectorAll('a.disabled');

for (let link of disabledMenuLinks) {
    link.onclick = function(event) {
        event.preventDefault()        
    }
}

console.log(disabledMenuLinks)


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });