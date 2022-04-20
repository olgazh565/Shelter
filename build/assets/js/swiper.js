// Слайдер--------------------------------------

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    slidesPerGroup: 3,
    // spaceBetween: 90,    
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loopAdditionalSlides: 0,        
      },
           
      // when window width is >= 767px
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
        loopAdditionalSlides: 0,        
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 90,        
      }   
    }         
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });