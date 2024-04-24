//owl
$('.carousel-one .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1
    },
    380: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
//owl
$('.review-two .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1
    },
    380: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 2
    }
  }
})

// 
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 

