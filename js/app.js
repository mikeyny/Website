/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
document.addEventListener("DOMContentLoaded", function(){
        Typed.new(".hello", {
            strings: ["^500 Hie , ^400 I'm Mike"],
            typeSpeed: 0,
            showCursor: false,
        });
        Typed.new(".about", {
            strings: ["I'm a "],
            typeSpeed: 0,
            startDelay: 5000,
            showCursor: false
        });
        Typed.new(".stuff", {
            strings: [" Student 🎓 ^500" , "Nerd🤓 ^500" ,"Blogger ⌨️^500" ,"Aspiring developer 💻 ^1000 "],
            contentType: 'html',
            typeSpeed: 0,
            startDelay: 7000,
            backDelay: 1000,
            showCursor: true,
    // character for cursor
          cursorChar: "|"
        });
        Typed.new(".blog", {
            strings: [" Wanna find out more ?🤔 ^1000" , "Check Out My <a href='https://blog.michaelnyamande.me/'>Blog</a> <br> Or Find Me on Social Media"],
            contentType: 'html',
            typeSpeed: 0,
            startDelay: 23000,
            showCursor: false
        });
        Typed.new('.icons', {
			stringsElement: document.getElementById('typed-icons'),
      contentType: 'html',
      typeSpeed: 0,
      startDelay: 38000,
      showCursor: false
		});


    });


particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 962.0472365193136
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
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
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 55,
      "color": "#09ebc3",
      "opacity": 0.6092965831288987,
      "width": 2.5
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
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
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.7123717933150386
        }
      },
      "bubble": {
        "distance": 267.9854800594439,
        "size": 24.362316369040354,
        "duration": 1.9489853095232281,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
