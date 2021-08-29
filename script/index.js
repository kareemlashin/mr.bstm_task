$(document).ready(()=> {
     $("#loading").fadeOut(1000);
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl:true,
        navText:[`<i class="fas fa-chevron-right"></i>`,`<i class="fas fa-chevron-left"></i>`],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});