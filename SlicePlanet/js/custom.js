$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }
    ;
    $('body').removeClass('loaded');
});

$(document).ready(function () {

    var mobileMenuIcon = $('.mobile-navigation_link.mobile_button-menu');
    var mobileSearchIcon = $('.mobile-navigation_link.mobile_button-search');
    var mobileCartIcon = $('.mobile-navigation_link.mobile_button-cart');
    var mobileAccountIcon = $('.mobile-navigation_link.mobile_button-account');
    var mobilePhoneIcon = $('.mobile-navigation_link.mobile_button-phone');


    mobileMenuIcon.click(function () {
        if (!($('.mobile_menu').hasClass('openMobileMenuItem'))) {
            $('.openMobileMenuItem').toggleClass('openMobileMenuItem').hide();
        }
        $('.mobile_menu').toggleClass('openMobileMenuItem').slideToggle();
    })

    mobileSearchIcon.click(function () {
        if (!($('.mobile_search').hasClass('openMobileMenuItem'))) {
            $('.openMobileMenuItem').toggleClass('openMobileMenuItem').hide();
        }
        $('.mobile_search').toggleClass('openMobileMenuItem').slideToggle();
    })


    mobileAccountIcon.click(function () {
        if (!($('.mobile_account').hasClass('openMobileMenuItem'))) {
            $('.openMobileMenuItem').toggleClass('openMobileMenuItem').hide();
        }
        $('.mobile_account').toggleClass('openMobileMenuItem').slideToggle();
    })

    mobileCartIcon.click(function () {
        if (!($('.mobile_cart').hasClass('openMobileMenuItem'))) {
            $('.openMobileMenuItem').toggleClass('openMobileMenuItem').hide();
        }
        $('.mobile_cart').toggleClass('openMobileMenuItem').slideToggle();
    })

    mobilePhoneIcon.click(function () {
        if (!($('.mobile_phone').hasClass('openMobileMenuItem'))) {
            $('.openMobileMenuItem').toggleClass('openMobileMenuItem').hide();
        }
        $('.mobile_phone').toggleClass('openMobileMenuItem').slideToggle();
    })

    var dropDownLink = $('.menu_item_drop > a');

    dropDownLink.click(function () {
        console.log($(this));
        $(this).next("ul").slideToggle();
    })

});


/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!( 'innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
};
/* viewport width */
$(function () {
    /* placeholder*/
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });


});

if ($('.hero-slider').length) {
    $('.hero-slider').slick({
        dots: true
    });


}
;

var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);



