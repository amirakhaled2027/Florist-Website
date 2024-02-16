var splide = new Splide("#main-slider", {
    width: 1300,
    // height: 270,
    pagination: false,
    cover: true,

    breakpoints: {
      1800: {
        width: 1300,
        // height: 270,
        pagination: false,
        cover: true,
      },

      1600: {
        width: 1100,
        // height: 230,
      },

      700: {
        width: 1000,
        // height: 250,
      },
      400: {
        width: 1500,
      },
 
    
    }
    });

  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go(index);
    });
  }

  splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });


  splide.mount();