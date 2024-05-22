AOS.init();

if (jQuery('.background-image').length > 0) {
    jQuery('.background-image').each(function () {
        var src = jQuery(this).attr('data-src');
        jQuery(this).css({
            'background-image': 'url(' + src + ')'
        });
    });
}

// Parallax background
jQuery('.jarallax').jarallax({
    speed: 0.5
});

// testimonial-slider
if(jQuery('.testimonial-slider').length){
   jQuery('.testimonial-slider').owlCarousel({
        rtl: true,
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplayHoverPause: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        navText: [
          '<i class="fa-solid fa-arrow-right"></i>',
          '<i class="fa-solid fa-arrow-left"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items: 1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
}

if (jQuery('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = jQuery(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                jQuery('#back-to-top').addClass('show');
            } else {
                jQuery('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    jQuery(window).on('scroll', function () {
        backToTop();
    });
    jQuery('#back-to-top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}