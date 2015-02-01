$(function() {

    $('.left.sidebar').sidebar('setting', 'transition', 'push');

    $('#m-btn').on('click', function(){
        $('#m-menu').sidebar('toggle');
    });

    $('.ui.accordion').accordion();

    $('.gmap').append('<iframe frameborder="0" style="border:0" src="https://maps.google.com/maps?output=embed&iwloc&z=12&t=p&q=London UK"></iframe>');

    $('.special.cards .image').dimmer({
      on: 'hover'
    });
});


// changed dimPage: true to false in semantic.js line 11662 
// to stop dimming when toggling sidebar