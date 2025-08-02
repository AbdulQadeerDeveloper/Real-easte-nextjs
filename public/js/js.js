$(document).ready(function () {
    // Smooth scroll
    $('.nav-link, .nav-btn .btn').click(function (e) {
        e.preventDefault();

        const headerHeight = $('header nav').outerHeight();
        const href = $(this).attr('href');
        const target = $(href);

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);

            $('.navbar-collapse').collapse('hide');
        } else {
            console.warn('Target not found:', href);
        }
    });

    // Change navbar background on scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background-color', '#212ea0');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
});
