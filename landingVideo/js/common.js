$(document).ready(function() {



	if(!device.tablet() && !device.mobile()) {
		$(".player").YTPlayer();
	} else {
		$(".heroSection").css("backgroundImage", "url(../img/img2.jpg)");
		$(".heading").html("OOPS");
		$(".textUnderHeading").html("You are on mobile, so no video for you:(");
	};

 




 
});

