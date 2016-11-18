$(document).ready(function() {
    PopUpHide();

    var popupBackground = $("#popupBackground");

    $("#link").on("click", function(e) {

        PopUpShow();

        var yourClick = true;
        $(document).bind("click.myEvent", function(e) {
            if (!yourClick && $(e.target).closest('#popupContentId').length == 0) {
                PopUpHide();
                $(document).unbind('click.myEvent');
            }
            yourClick = false;
        });

    });

});

function PopUpShow() {
    $(".popup").show();
}

function PopUpHide() {
    $(".popup").hide();
}