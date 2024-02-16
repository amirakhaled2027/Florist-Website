
const swiper = new Swiper('.sample-slider', {
    loop: true,                         //loop
    slidesPerView: 4.1,                   //number of slides to show
    centeredSlides : true,              //put acctive slide center
    spaceBetween: 30,                   //space between slides
    autoplay: {                         //autoplay
        delay: 1500,  
    },   
    
    breakpoints: {
        1200: {
            slidesPerView: 4.1,                   //number of slides to show
            centeredSlides : true,              //put acctive slide center
            spaceBetween: 30, 
        },
        925: {
            slidesPerView: 3.1,  
            spaceBetween: 30, 
        },
        600: {
            slidesPerView: 2.1,  
            spaceBetween: 15,                  //number of slides to show
        },
        350: {
            slidesPerView: 2.1,  
            spaceBetween: 15,                  //number of slides to show
        },
    },
    
    pagination: {                       //pagination（dots）
        el: '.swiper-pagination',
    },
    navigation: {                       //navigation（arrows）
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})