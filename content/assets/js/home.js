
$(document).ready(function() {
    // Set all elements to be invisible.
    $('#intro').css({
        'opacity' : '0',
        'top' : '-20px'
    });

    $('#links').css({
        'opacity' : '0',
        'left' : '-14px'
    });

    $('footer').css({
        'opacity' : '0',
        'bottom' : '-18px'
    });
});

$(window).load(function () {
    // Set the elements you want to affect opacity to 0 (making them invisible)
    // and using the type of direction you want them to come in from (or none).

    // Home Transitions
    $('#intro').delay(400).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, {duration: 600});

    $('#links').delay(800).animate({
    	'opacity' : '1',
    	'left' : '+=14px'
    }, {duration: 500});

    //Footer Transition
    $('footer').delay(920).animate({
    	'opacity' : '1',
    	'bottom' : '+=18px'
    }, {duration: 800});
});