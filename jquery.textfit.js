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

  var methods = {

    /**
     *  Width
     *
     *  Returns the width in pixels of the given text, based on
     *  the font size and style of the target element.
     */
    width : function(string) {

      // Create ruler with some default styles and font
      // information from target element
      var ruler = $("<span>" + string + "</span>").css({
        'position'    : 'absolute',
        'white-space' : 'nowrap',
        'visibility'  : 'hidden'
      }).css("font", this.css("font"));

      // Render ruler, measure, then remove
      $("body").append(ruler);
      var width = ruler.width();
      ruler.remove();

      return width;
    },

    /**
     *  BestFit
     *
     *  Adjusts the font size of the target element so that
     *  the string fits it perfectly.
     *
     *  The target element must have an absolute width and height.
     */
    bestfit : function() {
      var fs = parseInt(this.css("font-size"), 10);

      // Wrap the content of the target element in a div with
      // with the same width
      this.wrapInner($("<div id='textfit-best-fit-inner'></div>")
                     .css("width", this.css("width")));
      var i = $("#textfit-best-fit-inner");

      // Keep reducing the font size of the target element
      // until the inner div fits
      while(i.height() > this.height()) {
        this.css("font-size", --fs + "px");
      }

      // Remove inner div
      i.replaceWith(i.contents());
    }

  };

  $.fn.textfit = function( method ) {

    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.textfit' );
    }

  };

})( jQuery );