$(document).ready(function(){
    $('.language-carousel').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      useTransform: false,
      pauseOnHover: true,
      cssEase: 'linear',
    });
});