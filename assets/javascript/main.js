function detectBrowser() {
  var isSafari = /constructor/i.test(window.HTMLElement);



  if(isSafari)
    document.body.classList.add('safari')
}


 function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function initLucas(){
      console.log('%c Type : lucas', 'font-weight: bold')
      console.log('%c ------------------------------------------------', 'font-weight: bold');
      console.log('%c Explore the {Lucas} object and it\'s functions, ', 'font-weight: 300');
      console.log('%c ------------------------------------------------', 'font-weight: bold');
      var theCode = Math.round(Math.random() * 12) +''+ Math.round(Math.random() * 12)+''+ Math.round(Math.random() * 12)+''+ Math.round(Math.random() * 12)+''+ Math.round(Math.random() * 12);
      document.body.classList.add(theCode)
      window.lucas = {
        name: ['Lucas','Raymond','Luce','Jacques', 'Camille'],
        familyName: ['Bonomi','Barbedette'],
        email : 'lucas.bonomi@gmail.com',
        age : '25',
        origin : 'Aix-en-provence, France',
        employer : 'Algolia - http://algolia.com',
        crew: 'bullgit - http://bullg.it',
        livesIn: 'Paris',
        passions: ['css', 'Sass', 'web', 'SVG', 'Javascript'],

        socialNetworks: {
          twitter: '@LukyVj',
          instagram: '@LukyVj',
          snapchat: '@LukyVj'
        },

        card : function(){
          var card = `NAME: ${lucas.name}\nFAMILY NAME : ${lucas.familyName}\nAGE : ${lucas.age}\nEMAIL : ${lucas.email}\nTWITTER : ${lucas.socialNetworks.twitter}`
          alert(card)
        },

        picture : function() {
          return '😎'
        },

        crazy: function() {
            svgClick('mousemove', true);
        },

       changeColor : function () {
         getJSON('/assets/data/gradients.json').then(function(data) {
          var ds = data;

          for (var i = 0; i<ds.length; i++ ) {
            var x = Math.floor(Math.random() * ds.length);
            getTheme(ds[x]);
          }
        });
      },
      crazyColors: function(t) {
        var t = t || 500;
        setInterval(function(){
          lucas.changeColor();
        }, t)
      },
      acid: function() {
        lucas.crazyColors(10)
      },

      workAtAlgolia: function() {
        console.log('So, you wanna work at Algolia ?, if you\'re interested about the opportunity, check the whole page, there is a code, hidden somewhere. That you need on the next step. Next step : > $ lucas.algoliaTest()')
      },
      algoliaTest: function () {
        console.log('So, I assume you found the code ?, great! Now, unlock the redirection by typing : > $ lucas.unlockAlgoliaGates(pasteTheCodeHere)')
      },
      unlockAlgoliaGates: function(code) {
        if ( code == theCode ) {
          console.log('Congrats, head to : http://algolia.com/careers?lukyGame=success')
        } else {
          console.log('Too bad, try again :) ')
        }
      }
    };
    return lucas;
  }


function svgClick(on, dynamic) {
  var selector = document.querySelector('body');
  var selected = 0;

  function drawStar(e) {
    var posy, posx;
    posy = e.clientY - 50,
    posx = e.clientX - 50;
    var shapes = [
      `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="140" height="140" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><ellipse cx="68.092" cy="6.811" rx="6.809" ry="6.811" transform="translate(-60.944 .15)" fill="${getRandomColor()}" fill-rule="evenodd"/></svg>`,
      `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="100" height="100" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path fill="${getRandomColor()}" d="M0 0h10v10H0z" fill-rule="evenodd"/></svg>`,
      `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="100" height="100" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Star-1" fill="${getRandomColor()}" stroke="transparent"><path d="M5.366915,0.6900826 C5.366915,3.1582521 3.366489,5.1590909 0.89883,5.1590909 C3.366489,5.1590909 5.366915,7.1599298 5.366915,9.6280992 C5.366915,7.1599298 7.36734,5.1590909 9.835,5.1590909 C7.36734,5.1590909 5.366915,3.1582521 5.366915,0.6900826 L5.366915,0.6900826 L5.366915,0.6900826 L5.366915,0.6900826 Z"></path></g></g></svg>`,
      `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="140" height="140" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><ellipse cx="68.092" cy="6.811" rx="6.809" ry="6.811" transform="translate(-60.944 .15)" fill="transparent" stroke="${getRandomColor()}" fill-rule="evenodd"/></svg>`,
      `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="100" height="100" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path fill="transparent" stroke="${getRandomColor()}" d="M0 0h10v10H0z" fill-rule="evenodd"/></svg>`,
       `data:image/svg+xml;utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="100" height="100" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Star-1" fill="transparent" stroke="${getRandomColor()}"><path d="M5.366915,0.6900826 C5.366915,3.1582521 3.366489,5.1590909 0.89883,5.1590909 C3.366489,5.1590909 5.366915,7.1599298 5.366915,9.6280992 C5.366915,7.1599298 7.36734,5.1590909 9.835,5.1590909 C7.36734,5.1590909 5.366915,3.1582521 5.366915,0.6900826 L5.366915,0.6900826 L5.366915,0.6900826 L5.366915,0.6900826 Z"></path></g></g></svg>`
    ];

    function changeShape() {
      var limit = shapes.length - 1;

      if (selected == limit) {
        selected = 0;
      } else {
        selected++;
      }
      return selected;
    }

    if(dynamic) {
      selector.addEventListener('click', function(){
        changeShape();
      });
    }

    selected = dynamic ? selected : 5;
    var svg = new Image();
    var sourceShape = shapes[selected];
    svg.src = shapes[selected];
    svg.style.position = 'absolute';
    svg.style.zIndex = '9999999999';
    svg.style.top = posy + 'px';
    svg.style.left = posx + 'px';
    svg.style.display = 'block';

    svg.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg) scale(' + (Math.random() * 5) / 10 + ') translateZ(0px)'

    selector.appendChild(svg);
  }

  selector.addEventListener(on, drawStar);
  selector.addEventListener('dbclick' , function(){ alert()});
}

  function getTheme(colorObj) {
    var s = Math.floor(Math.random() * 2);
    var themeColor = colorObj.colors[0];
    var themeAccent = colorObj.colors[1];
    document.documentElement.style.color = themeColor;
    document.querySelector('h1').style.color = detectBrightness();
    document.querySelector('small').style.color = detectBrightness();
    document.querySelector('.btn').style.color = detectBrightness();
    document.querySelector('.inner-avatar').style.backgroundImage = 'linear-gradient('+ Math.floor(Math.random() * 360) + 1 +'deg, '+themeAccent+', currentColor)';
    document.querySelector('.container').style.backgroundImage = 'linear-gradient('+ Math.floor(Math.random() * 360) + 1 +'deg, '+themeAccent+', currentColor)';
    var btns = document.querySelectorAll('.btn');
    var ps = document.querySelectorAll('p');
    var as = document.querySelectorAll('a');
    var h2s = document.querySelectorAll('h2');
    for (var i = 0; i < ps.length; i++) {
      ps[i].style.color = detectBrightness()
    }
    for (var i = 0; i < as.length; i++) {
      as[i].style.color = detectBrightness()
    }

    for ( var i = 0; i < btns.length; i++ ) {
      btns[i].style.color = themeAccent;
      btns[i].style.backgroundImage = detectBrightness()
    }
    for ( var i = 0; i < h2s.length; i++ ) {
      h2s[i].style.color = detectBrightness();
    }
  }

  // Check color brightness
  // returns brightness value from 0 to 255
  // http://www.webmasterworld.com/forum88/9769.htm
  function get_brightness(hexCode) {
  // strip off any leading #
    hexCode = hexCode.replace('#', '');

    var c_r = parseInt(hexCode.substr(0, 2),16);
    var c_g = parseInt(hexCode.substr(2, 2),16);
    var c_b = parseInt(hexCode.substr(4, 2),16);

    return ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  }

  // convert RGB to hex
  // http://stackoverflow.com/questions/1740700/get-hex-value-rather-than-rgb-value-using-jquery
  function rgb2hex(rgb) {
     if (  rgb.search("rgb") == -1 ) {
          return rgb;
     } else {
          rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
          function hex(x) {
               return ("0" + parseInt(x).toString(16)).slice(-2);
          }
          return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
     }
  }

  function detectBrightness() {
    var isBright = (parseInt(get_brightness(rgb2hex(document.documentElement.style.color))) > 160);
    if (!isBright)
      return '#FFF'
    else
      return '#000'
  }


// header pattern
function mixPattern(num) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var pattern = document.getElementById('pattern');
  pattern.innerHTML = '';

  for (var i = 0; i < num; i++) {
    var item = document.createElement('div');
    item.classList.add('ball');
    pattern.appendChild(item)
  }

  var pItems = pattern.children;

  for (var i = 0; i < pItems.length; i++ ) {
    position(pItems[i], i)
  }

  function position(el, num){
    var py = getRandomInt(1, 100);
    var px = getRandomInt(1, 100);
    var size = getRandomInt(1, 100);
    var blur = getRandomInt(1,3);
    var delay = getRandomInt(1,5);

    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.top = py + '%';
    el.style.left = px  + '%';
    el.style.webkitFilter = 'blur('+blur  + 'px)';
    el.style.filter = 'blur('+blur + 'px)';
    el.style.animationDelay = delay + 's';
    el.style.transform = 'translateZ(10px)';
    el.style.backgroundColor = 'rgba(0,0,0,0.1)';
    el.classList.add('layer-'+ i);
    el.setAttribute('data-offset', '60');
  }
}


var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};



window.onclick = function(){
  mixPattern(30)
}

window.onload = function() {
  detectBrowser();
  svgClick('click', false);
  initLucas();
  mixPattern(30);

  getJSON('/assets/data/gradients.json').then(function(data) {
  var ds = data;

  for (var i = 0; i<ds.length; i++ ) {
    var x = Math.floor(Math.random() * ds.length);
    getTheme(ds[x]);
  }
});
};


