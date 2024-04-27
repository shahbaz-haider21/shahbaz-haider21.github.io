$(function () {
    
    // gallery Scroll

    $('#galleryCarousel').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-custom-arrow slick-prev border-0">  <i class="fa-solid fa-arrow-left-long"></i> </button>',
        nextArrow: '<button type="button" class="slick-custom-arrow slick-next border-0">  <i class="fa-solid fa-arrow-right-long"></i> </button>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.back-to-top').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    //adding class to header on scroll

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $(".header-sec").addClass("darkHeader");
        }
        else {
            $(".header-sec").removeClass("darkHeader");
        }
    }); //missing )
})

;

