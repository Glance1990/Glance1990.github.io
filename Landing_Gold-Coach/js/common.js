$(document).on('ready', function() {
     
    //   $(".regular").slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    //   });
    //   $(".center").slick({
    //     dots: true,
    //     infinite: true,
    //     centerMode: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    //   });
    //   $(".variable").slick({
    //     dots: true,
    //     infinite: true,
    //     variableWidth: true
    //   });
    // });

    $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


});