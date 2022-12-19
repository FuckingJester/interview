const burgerMenu = document.querySelector('.header__burger');
if(burgerMenu){
    const menuBody = document.querySelector('.menu__body');
    burgerMenu.addEventListener('click',function(e){
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    });
}


const swiper = new Swiper('.cards__right',{

    loop: true,
    grabCursor:true,
    speed:800,
    slidesPerView:1,
    pagination: {
        el: '.cards__pagination',
        clickable: true,
        
      },

    mousewheel:{
        sensivity: 1,
    },
}); 