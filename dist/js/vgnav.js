(function(s){"use strict";s.fn.vegasMenu=function(a){a=s.extend({},arguments[0]||{});var e=this,n=e.children("ul"),i=s("body");var r="vg-nav-hamburger",l="vg-nav-sidebar",t="vg-nav-overlay";var d="vg-nav-main-container",o="show";var c=a.sidebar||false,v=window.innerWidth;n.addClass(d);u();s(document).on("click","li.dropdown a",function(){var a=s(this),e=a.parent("li");s(".dropdown-mega").removeClass(o);if(e.parent("ul").hasClass(d)){var i=n.find("."+o);if(i.hasClass("current"))i.removeClass(o);if(!e.hasClass("current")){e.addClass(o).addClass("current");i.removeClass("current")}else{e.removeClass(o).removeClass("current")}return false}else{if(e.hasClass(o)){a.parent("li").removeClass(o);if(e.parent("ul").hasClass(d)){n.find("."+o).removeClass(o)}}else{if(a.parent("li").children("ul").length>0){a.parent("li").addClass(o);return false}}}});s(document).on("click","li.dropdown-mega > a",function(){var a=s(this);var e=a.parent("li");if(e.hasClass(o)){e.removeClass(o)}else{n.find("."+o).removeClass(o).removeClass("current");e.addClass(o)}return false});s(document).mouseup(function(a){var e=s("."+d);if(e.has(a.target).length===0){n.find("."+o).removeClass(o).removeClass("current")}});s(document).on("click","."+r+", ."+t+", ."+l+"__close",function(){i.find("."+r).toggleClass(o);i.find("."+l).toggleClass(o);i.find("."+t).toggleClass(o);return false});if(c){var f=c.width||false;if(f){h(v,f);s(window).on("resize",function(){h(s(this).width(),f)})}}function u(){var a=i.find(".dropdown-mega > a, .dropdown > a"),d='<span class="toggle"></span>';a.each(function(){var a=s(this).text();s(this).html(a+d)});e.prepend('<a href="#" class="'+r+'"><span></span></a>');i.append('<div class="'+l+'">'+'<div class="'+l+'__close">&times;</div>'+'<div class="'+l+'__content"></div>'+"</div>");i.append('<div class="'+t+'"></div>');var o=n.clone().addClass("vg-nav-cloned");i.find("."+l+"__content").append(o)}function h(a,e){var n=s("."+l);if(a>=1200&&e.xl){n.css("width",e.xl).css("right","-"+e.xl)}if(a<1200&&a>=992&&e.lg){n.css("width",e.lg).css("right","-"+e.lg)}if(a<992&&a>=768&&e.md){n.css("width",e.md).css("right","-"+e.md)}if(a<768&&a>=480&&e.sm){n.css("width",e.sm).css("right","-"+e.sm)}if(a<480&&e.xs){n.css("width",e.xs).css("right","-"+e.xs)}}return false}})(jQuery);