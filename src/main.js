(function() {
  'use strict';
  console.log('sanity check');


    for (var i = 0; i < 130; i++) {
      var $el = $('<div class="pixel"></div>')
      $('.canvas').append($el);
    };

    var color = 'white';

    $('.pixel').on('click', function (e) {
      $(this).css('background-color', color);
    });

    $('.paint-color').on('click', function (e) {
      var classes = $(this).attr('class')
      color = classes.replace('paint-color ', '');

      //can also do:

      //color = $(this).css('background-color')
    })

  function newPalette() {

  }

}());
