$("#aboutme").click(function() {
    $('html, body').animate({
        scrollTop: $("aboutme").offset().top
    }, 2000);
});