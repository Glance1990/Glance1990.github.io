$(document).ready(function() {
   
	 

  $('select').select2({
  	placeholder: 'moscow',
  	minimumResultsForSearch: Infinity,

  }).on("select2:open", function () {
    $('.select2-results__options').niceScroll({
  	cursorcolor:"#e9066b",
  	cursorwidth: "6px",
  	cursorborder: "none",
  	autohidemode: false,
  	railalign: "left"
  });
});

  // $('').baron();
 // $('.select2').jScrollPane();

  $('.block').niceScroll({
  	cursorcolor:"#e9066b",
  	cursorwidth: "16px",
  	cursorborder: "none"
  });





  $(".imgcard").bind("click", function(){
			$(".cardImageBig").attr("src", "img/" + $(this).attr("id") + ".jpg");
  });


  $("#maleCheckerSpan").bind("click", function() {
  		if($(this).hasClass("active")){
  			return;
  		}

  		$(this).addClass("active");
  		if($("#femaleCheckerSpan").hasClass("active")){
  			$("#femaleCheckerSpan").removeClass("active");
  		}
  		return;
  });



   $("#femaleCheckerSpan").bind("click", function() {
 		if($(this).hasClass("active")){
  			return;
  		}

  		$(this).addClass("active");
  		if($("#maleCheckerSpan").hasClass("active")){
  			$("#maleCheckerSpan").removeClass("active");
  		}
  		return;
   });









   // PopUpHide();
     
   // var popupBackground = $("#popupBackground");

   // $("#link").on("click", function(e){
	   
	  //  PopUpShow();
	   
	  //  var yourClick = true;
	  //  $(document).bind("click.myEvent", function(e){
		 //   if(!yourClick && $(e.target).closest('#popupContentId').length == 0){
			//    PopUpHide();
			//    $(document).unbind('click.myEvent');
		 //   }
		 //  yourClick = false;
	  //  });
  
   // });

});

// function PopUpShow(){
//     $(".popup").show();
// }
// function PopUpHide(){
//     $(".popup").hide();
// }
