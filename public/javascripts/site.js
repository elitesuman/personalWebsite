/**
 * Created by suman on 11/9/2016.
 */

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();
    if(wScroll>400){
        $('#para1').addClass('animated fadeInLeft');
        $('#para2').addClass('animated fadeInUp');
        $('#para3').addClass('animated fadeInRight');
    }

});

function showPassword() {

    var key_attr = $('#passwordLogin').attr('type');

    if(key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#passwordLogin').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#passwordLogin').attr('type', 'password');

    }

}

