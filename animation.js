    document.addEventListener('DOMContentLoaded', function () {
    
      new Splide('#hero-slide', {
        type: 'fade',
        pagination: false,
        cover: true,
        autoplay: true,
        interval: 5000,
        speed: 10,
      }).mount();
    });


