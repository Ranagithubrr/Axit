$(document).ready(function() {
	$('#nav').onePageNav();


});

// Add class for menu bar
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".nav-bar").addClass("darkHeader");
    } else {
        $(".nav-bar").removeClass("darkHeader");
    }

});
//  scroll top button function
$(document).ready(function() {

$("#sctop").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#front-sec").offset().top
    }, 1000);
});

});


// Add class for scroll top button

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("#sctop").removeClass("adrm");
    } else {
        $("#sctop").addClass("adrm");
    }

});