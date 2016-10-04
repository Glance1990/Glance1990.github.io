    var lendingTime = [
{ label: "1 месяц", value: 1000},
{ label: "3 месяца", value: 1001},
{ label: "6 месяцев", value: 1002}
];
    var authorizationMethod = [
{ label: "Способ авторизации", value: 1000},
{ label: "Способ авторизации 1", value: 1001},
{ label: "Способ авторизации 2", value: 1002}
];
var paymentMethod = [
{ label: "Налом", value: 1000},
{ label: "Безналом", value: 1001}
];



function popUpHide() {
	$("#popUp1").hide();
};
function popUpShow() {
	$("#popUp1").show();
};



$(document).ready(function () {
    smoothScroll(1000);

    popUpHide();

    $(".buyNow").on("click", popUpShow);

    $("#popUpClose").on("click", popUpHide);

  


    
    function smoothScroll(duration) {
        $('a[href^="#"]').on('click', function (event) {
            var target = $($(this).attr('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, duration);
            }
        });
    }




  
    $('#landing').autocomplete({
        minLength: 0,
        source: lendingTime,
        delay: 0,
        focus: function( event, ui ) {
            $(this).val( ui.item.label );
            return false;
        },
        select: function( event, ui ) {
            $(this).blur();
            $(this).val( ui.item.label );
            return false;
        },
        change: function (event, ui) {
            //if the value of the textbox does not match a suggestion, clear its value
            if ($(".ui-autocomplete li:textEquals('" + $(this).val() + "')").size() == 0) {
                $(this).val('');
                $('#hidPositionType').val('');
            }
        },
        close: function(event, ui) {
            $(this).blur();
            return false;
        }
    })
    .focus(function(){
        $(this).autocomplete('search','');
    })
;


    $('#authorization').autocomplete({
        minLength: 0,
        source: authorizationMethod,
        delay: 0,
        focus: function( event, ui ) {
            $(this).val( ui.item.label );
            return false;
        },
        select: function( event, ui ) {
            $(this).blur();
            $(this).val( ui.item.label );
            return false;
        },
        change: function (event, ui) {
            //if the value of the textbox does not match a suggestion, clear its value
            if ($(".ui-autocomplete li:textEquals('" + $(this).val() + "')").size() == 0) {
                $(this).val('');
                $('#hidPositionType').val('');
            }
        },
        close: function(event, ui) {
            $(this).blur();
            return false;
        }
    })
    .focus(function(){
        $(this).autocomplete('search','');
    })
;

    $('#payment').autocomplete({
        minLength: 0,
        source: paymentMethod,
        delay: 0,
        focus: function( event, ui ) {
            $(this).val( ui.item.label );
            return false;
        },
        select: function( event, ui ) {
            $(this).blur();
            $(this).val( ui.item.label );
            return false;
        },
        change: function (event, ui) {
            //if the value of the textbox does not match a suggestion, clear its value
            if ($(".ui-autocomplete li:textEquals('" + $(this).val() + "')").size() == 0) {
                $(this).val('');
                $('#hidPositionType').val('');
            }
        },
        close: function(event, ui) {
            $(this).blur();
            return false;
        }
    })
    .focus(function(){
        $(this).autocomplete('search','');
    })
    // .data( "autocomplete" )._renderItem = function( ul, item ) {
    //     return $( "<li></li>" )
    //         .data( "item.autocomplete", item )
    //         .append( "<a>" + item.label + "</a>" )
    //         .appendTo( ul );
    // }
    ;




});
