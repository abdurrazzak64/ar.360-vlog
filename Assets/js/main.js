$(document).ready(function(){

// menu sticky part

    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        if(scroll < 46){
            $(".stk").removeClass("scroll-header");
        }
        else{
            $(".stk").addClass("scroll-header");
        }
    });




    // active slider
    $(".sliders").owlCarousel({
        'items':1,
        'loop': true,
        'autoplay': true
    });

     // testimonials active slider
     $(".testimonials").owlCarousel({
        'items':3,
        'loop': true,
        'autoplay': true,
        'margin': 30,
        'center': true,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


// active counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

    // isotope for portfolio
    // init Isotope
    var $grid = $('.portfolio_items').isotope();
    // filter items on menu click
    $('.portfolio_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

        // filter items on menu active
        $('.portfolio_menu').on( 'click', 'li', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
                // magnific image gallery
                $('.gallery').magnificPopup({
                    type:'image',
                    gallery:{
                        enabled:true
                      }
                });

  });


//   $(window).load(function(){
//     $(window).on('scroll', function(){
//         if($(window).scrollTop() > 0){
//             $('.stk').addClass('sticky');
//         }
//         else{
//           $('.stk').removeClass('sticky');
//         }
//     });
// });