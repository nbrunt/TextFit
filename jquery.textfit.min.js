/**
 * jQuery Text Fit v1.0
 * https://github.com/nbrunt/TextFit
 *
 * Copyright 2013 Nick Brunt
 * http://nickbrunt.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
!function(a){var b={width:function(b){var c=a("<span>"+b+"</span>").css({position:"absolute","white-space":"nowrap",visibility:"hidden"}).css("font",this.css("font"));a("body").append(c);var d=c.width();return c.remove(),d},bestfit:function(){for(var a=parseInt(this.css("font-size"),10),b=c(this);b.height()>this.height();)this.css("font-size",--a+"px");return d(b),this},truncate:function(a){for(var e,b=c(this);b.height()>this.height();)e=b.html(),b.html(e.substring(0,e.length-4)),b.append("...");return d(b),this}};a.fn.textfit=function(c){return this.length>1?void this.each(function(){a(this).textfit(c)}):b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.textfit"):b.init.apply(this,arguments)};var c=function(b){return b.wrapInner(a("<div id='textfit-inner'></div>").css("width",b.css("width"))),a("#textfit-inner")},d=function(a){a.replaceWith(a.contents())}}(jQuery);
