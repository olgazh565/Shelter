// Burger-menu --------------------------------------------

const menu = document.querySelector('.header__nav-burger');
const openMenuButton = document.querySelector('.nav__burger_button');
const blackout = document.querySelector('.header__blackout');
const body = document.querySelector('body')

openMenuButton.addEventListener('click', toggleMenu)

function toggleMenu(){
  menu.classList.toggle('active');
  blackout.classList.toggle('active');
  openMenuButton.classList.toggle('active');
  body.classList.toggle('active');
}

const navLinks = document.querySelectorAll('.item-burger');

for (let link of navLinks){
  link.onclick = () => {
    toggleMenu()
  }
}

const blackoutParent = document.querySelector('.header-burger');

blackoutParent.onclick = function(event) {
    if (event.target === blackout){
      toggleMenu()
    }   return
}

// --------------------------------------------------------
// import Swiper from 'swiper/dist/js/swiper.min.js'
// import Swiper from "./node_modules/swiper"
// import * as Swiper from "./swiper-bundle.js"
// import * as Swiper from "./swiper"
// Слайдер--------------------------------------
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
  
//     // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 3,
//     slidesPerGroup: 3,
    
//     spaceBetween: 90,
//     // loopAdditionalSlides: 1,
    
//     breakpoints: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 0,
//         loopAdditionalSlides: 0,
//         loop: true,
//       },
           
//       // when window width is >= 767px
//       767: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//         spaceBetween: 90,
//         loopAdditionalSlides: 0,
//         loop: true,

//       },
//       // when window width is >= 1280px
//       1280: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         spaceBetween: 90,
//         // loopAdditionalSlides: 1,
//         loop: true,
//       }   
//     }         
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });


// Modal window--------------------------------------------------------

const pets = [
    {
      "name": "Jennifer",
      "img": "./assets/imgs/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/imgs/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/imgs/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/imgs/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/imgs/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/imgs/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/imgs/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/imgs/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];

console.log(pets[3].name)
for( let i=0; i<pets.length; i++){
  console.log(pets[i].name)
}


const petsCards = document.querySelectorAll('.swiper__card')
const modalWindow = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal__close-button')

for (let card of petsCards){

  card.addEventListener('click', showModal)
}
function showModal(event){
  modalWindow.classList.add('active');
  body.classList.add('active');
         
  const nameOfPet = event.target.closest(".swiper__card").getAttribute("id");  
  const index = pets.findIndex(item => item.name == nameOfPet);
  let i = index;

  document.querySelector('.modal__heading').innerHTML = pets[i].name;
  document.querySelector('.modal__subheading').innerHTML = pets[i].type + ' - ' + pets[i].breed;
  document.querySelector('.modal__description').innerHTML = pets[i].description;
  document.querySelector('.list__item1').innerHTML = pets[i].age;
  document.querySelector('.list__item2').innerHTML = pets[i].inoculations;
  document.querySelector('.list__item3').innerHTML = pets[i].diseases;
  document.querySelector('.list__item4').innerHTML = pets[i].parasites;
  document.querySelector('.modal__img').setAttribute('src', pets[i].img)  
 }            
     
console.log(pets[1].name)

function closeModal(){
  modalWindow.classList.remove('active');
  body.classList.remove('active');
}

modalCloseButton.onclick = function(e){
    e.preventDefault()
    closeModal()  
}

const modalWindowParent = document.querySelector('.modal_background')

modalWindowParent.onclick = function(event) {
  if (event.target === modalWindow){
    closeModal()
  } return
}
