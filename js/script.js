$(document).ready(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if( scrollOffset >=introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(event) {

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate ({
           scrollTop: blockOffset -25
        }, 700);

    });

    $('.burger').click(function () {
       $('.burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('#nav a').click(function() {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.slider').slick({
        arrows: false,
        dots: true,
        speed: 2000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipe: true
    });

    $('.photo-portfolio__body').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive : [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },{
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
