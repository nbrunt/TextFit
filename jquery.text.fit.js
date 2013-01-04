/**
 * jQuery Text Fit v0.1b
 * https://github.com/nbrunt/TextFit
 *
 * Copyright 2013 Nick Brunt
 * http://nickbrunt.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function( $ ) {

  /**
   *  Text Width
   *
   *  Returns the width in pixels of the given text, based on
   *  the font size and style of the target element.
   */
  $.fn.textWidth = function(string) {

    // Create ruler with some default styles and font
    // information from target element
    var ruler = $("<span>" + string + "</span>").css({
      'white-space' : 'nowrap',
      'visibility' : 'hidden'
    }).css("font", this.css("font"));

    // Render ruler, measure, then remove
    $("body").append(ruler);
    var width = ruler.width();
    ruler.remove();

    return width;
  };
})( jQuery );