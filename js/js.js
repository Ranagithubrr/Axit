$(document).ready(function() {
	$('#nav').onePageNav();


});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".nav-bar").addClass("darkHeader");
    } else {
        $(".nav-bar").removeClass("darkHeader");
    }

});

