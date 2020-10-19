$(document).ready(function () {
    $('.hero_carousel_wrapper').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 500,
        animateIn: 'animate__jackInTheBox',
        animateOut: 'animate__zoomOut',
    });

    $('.latest_courses').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    $('select').niceSelect();

    $('.latest_course-overlay').slideUp()

    $('.latest_course .card-img-top').mouseenter(function () {
        $(this).find('.latest_course-overlay').slideDown()
    })
    $('.latest_course .card-img-top').mouseleave(function () {
        $(this).find('.latest_course-overlay').slideUp()
    })

    $(window).scroll(function () {
        let pos = window.scrollY;

        // console.log(pos)

        if (pos > 300) {
            $('.visitor_feature').addClass('animate__animated animate__fadeInDown')
        }

        if (pos > 1400) {
            $('.latest_course').addClass('animate__animated animate__fadeInDown')
        }

        if (pos > 1800) {
            $('.latest_news_wrapper').addClass('animate__animated animate__fadeInDown')
        }
    })


    $('.desktop_nav .nav-item').mouseenter(function () {
        $(this).children('.page_menu-dropdown').slideDown()
        if ($(this).children('a').text() !== "Courses") {
            $('.page_menu_course-dropdown').removeAttr('style')
        }
    })

    $('.desktop_nav .nav-item').mouseleave(function () {
        $(this).children('.page_menu-dropdown').hide()
    })

    $('.desktop_nav .nav-item').mouseenter(function () {
        if ($(this).children('a').text() === "Courses") {
            $('.page_menu_course-dropdown').css('display', 'block')
            // $('.course_dropdown_category-item').slideDown()
        }
    })

    $('.page_menu_course-dropdown').mouseleave(function () {
        $(this).removeAttr('style')
    })


    $('.mobile_nav .nav-item').mouseenter(function () {
        $('.mobile_nav-dropdown').hide()
        $(this).children('.mobile_nav-dropdown').slideDown()
    })

    $('.mobile_nav .nav-item').mouseleave(function () {
        $(this).children('.mobile_nav-dropdown').hide()
    })
})

