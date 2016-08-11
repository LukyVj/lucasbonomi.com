
/**
 * The code below was originally developped by
 * @Balaj Marius on this pen :
 * https://codepen.io/mariusbalaj/pen/MaKRar
 *
 * -------------------------------------------
 * Designed by @Konstantine Trundayev
 * https://dribbble.com/k0t
 * Coded by @Balaj Marius for @Designmodo
 * http://mariusbalaj.com | http://designmodo.com
 */

var $poster = $('.scene'),
  $shine = $('.shine'),
  $layer = $('div[class*="layer-"]'),
  w = $(window).width(), //window width
  h = $(window).height(); //window height

function initPoster(){
  $(window).on('mousemove load', function(e) {
  var pageY,pageX;
  pageY = e.pageY || document.documentElement.clientHeight / 2,
  pageX = e.pageX || document.documentElement.clientWidth / 2;

  var offsetX = 0.5 - pageX / w, //cursor position X
    offsetY = 0.5 - pageY / h, //cursor position Y
    dy = e.pageY - h / 2, //@h/2 = center of poster
    dx = e.pageX - w / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
    angle = theta * 180 / Math.PI - 90, //convert rad in degrees
    offsetPoster = $poster.data('offset'),
    transformPoster = 'translateY(' + -offsetX * (offsetPoster) + 'px) rotateX(' + (-offsetY * (offsetPoster * 0.5)) + 'deg) rotateY(' + (offsetX * (offsetPoster * 0.5)) + 'deg) scale(0.9) translateZ(-10px)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //gradient angle and opacity
//  $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.pageY / h + ') 0%,rgba(255,255,255,0) 80%)');
  $('#dynastyle').text('.scene.shine:after {background: linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (e.pageY / h) / 2 + ') 0%,rgba(255,255,255,0) 80%);transform: translateZ(-10px)}')
  //poster transform
  $poster.css('transform', transformPoster);

  //parallax foreach layer
  $layer.each(function() {
    var $this = $(this),
      offsetLayer = $this.data('offset') || 0,
      scaleLayer = $this.data('scale') || false,
      offsetLeft = $this.data('offset-left') || false,
      isRescaled = scaleLayer ? scaleLayer : '0.9',
      isOffestedLeft = offsetLeft ? offsetLeft : '0',
      transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px) scale('+ isRescaled +')';

    $this.css('transform', transformLayer);
  });

    return initPoster;
  });
}

 initPoster();