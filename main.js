$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        loop:true,
        margin:30,
        startPosition:2,
        items:3,
    });
  });

  var owl = $('.owl-carousel');
  
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});



$('.slider__btn--prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
})