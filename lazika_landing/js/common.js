var meatChecker = document.getElementById("meatChecker");
var saladChecker = document.getElementById("saladChecker");
var drinkChecker = document.getElementById("drinkChecker");
var beerChecker = document.getElementById("beerChecker");

var buttonShowAll = document.getElementById("showAll");
var buttonShowNone = document.getElementById("showNone");

var chekerArray = [meatChecker, saladChecker, drinkChecker, beerChecker];

var meatBlock = document.getElementById("meat");
var saladBlock = document.getElementById("salad");
var drinkBlock = document.getElementById("drink");
var beerBlock = document.getElementById("beer");

var blockArray = [meatBlock, saladBlock, drinkBlock, beerBlock];


var spanArray = document.querySelectorAll("label > span");



function showAllBlocks() {
	for (i = 0; i < blockArray.length; i++) {
		blockArray[i].style.display = "block";
	};
	removeClass(spanArray);
	buttonShowAll.style.display = "none";
	buttonShowNone.style.display = "block";
}
function showFirstBlock() {
		addClassNone(blockArray);
		meatBlock.style.display = "block";
		spanArray[0].className += " active";
		buttonShowAll.style.display = "block";
		buttonShowNone.style.display = "none";
};

function addClassNone(array) {
	for (i = 0; i < array.length; i++) {
		array[i].style.display = "none";
	}
};

function removeClass(array) {
	for (i = 0; i < array.length; i++) {
		array[i].classList.remove('active');
	}
};


meatChecker.addEventListener("click", check);
saladChecker.addEventListener("click", check);
drinkChecker.addEventListener("click", check);
beerChecker.addEventListener("click", check);

buttonShowNone.addEventListener("click", showFirstBlock);
buttonShowAll.addEventListener("click", showAllBlocks);
  

function check() {
    if (meatChecker.checked) {
    	addClassNone(blockArray);
    	meatBlock.style.display = "block";
    	removeClass(spanArray);
    	spanArray[0].className += " active";
    }
    if (saladChecker.checked) {
    	addClassNone(blockArray);
    	saladBlock.style.display = "block";
    	spanArray[1].className += " active";
    	spanArray[0].classList.remove('active');
    	spanArray[2].classList.remove('active');
    	spanArray[3].classList.remove('active');
    }
    if (drinkChecker.checked) {
    	addClassNone(blockArray);
    	drinkBlock.style.display = "block";
    	spanArray[2].className += " active";
    	spanArray[0].classList.remove('active');
    	spanArray[1].classList.remove('active');
    	spanArray[3].classList.remove('active');
    }
    if (beerChecker.checked) {
		addClassNone(blockArray);
    	beerBlock.style.display = "block";
    	spanArray[3].className += " active";
    	spanArray[1].classList.remove('active');
    	spanArray[2].classList.remove('active');
    	spanArray[0].classList.remove('active');
    }

};

check();
smoothScroll(1000);

$('#date').datepicker({
    language: "ru",
    orientation: "bottom auto"
});

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

$("#myCarousel").carousel("pause");
