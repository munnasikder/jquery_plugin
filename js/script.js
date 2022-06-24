// wowjs
  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
      wow.init();
$(document).ready(function(){

  // counter
  $('.counter').counterUp();

  // curvedtext
  var arc = function (t)
  {
      return {
          x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
          y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
      };
  };

  $('#text1').curvedText({
      curve:    arc,
      domain:   [-0.2, 0.2],
      viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
  });

  // aos
  AOS.init();

  // isotope
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

});