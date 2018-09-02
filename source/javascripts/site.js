$(document).ready(function(){
$('.getstarted__testamonials').slick({
    arrows: false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 600000,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<div class="getstarted__testamonials--dots-dot">'+'</div>';
    }
//   }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     $(".getstarted__testamonials--dots-dot").removeClass('slideractive');
//     $('.getstarted__testamonials--dots-dot').addClass('slideractive');        
 });;
})

window.onscroll = function() {
    if($(".header")) return;
  
    if (window.pageYOffset > 50) $(".header").classList.remove("header-inverted");
    else $(".header").classList.add("header-inverted");
  };
