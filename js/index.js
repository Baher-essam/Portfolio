
//particlesJS​
particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 540
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": ["circle" , ""],
      "stroke": {
        "width": 0,
        "color": "#f1f1f1"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "buble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 350,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 20,
        "duration": 2,
        "opacity": 0.4,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);




//waiting screen for loading site
$(document).ready(function(){
  $("#loading").fadeOut(2000);
  $(".sk-cube-grid").fadeOut(2000 , function(){
      $("html").css("overflow" , "auto");
  })
})



//wow.js fire function
new WOW().init();


//mixitup fire function
var mixer = mixitup('#projects');
var mixer = mixitup('#projects', {
  selectors: {
      target: '.mix'
  }
});

//parallex js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});