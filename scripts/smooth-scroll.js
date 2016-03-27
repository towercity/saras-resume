$("#splash-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

//TODO: Add smooth scroll for header links
