(function(s){"use strict";s.fn.vegasMenu=function(a){a=s.extend({},arguments[0]||{});var e=s("body"),n=window.innerWidth,l;var i=a.expand||"sidebar";var r="vg-nav-hamburger",t="vg-nav-sidebar",d="vg-nav-collapse",o="vg-nav-overlay",f="vg-nav-hover";var v=this,c=s(this),h=v.children("ul"),u="vg-nav-main-container",C="show";var g=a.toggle||'<span class="default"></span>';var p="vg-nav-xl",m="vg-nav-lg",w="vg-nav-md",x="vg-nav-sm",b="vg-nav-xs";var _=1200,k=992,y=768,W=480,j=0;var z=1921,M=1200,Q=992,q=768,A=480;h.addClass(u);H();if(i==="sidebar"){var B=e.find("."+t),D=a.sidebar||false,E=v.attr("data-sidebar-open")||"right";e.find("."+d).remove();if(D){var F=D.width||false;E=D.open||E;if(F){L(n,F);s(window).on("resize",function(){L(s(this).width(),F)})}}I(E)}else if(i==="collapse"){J()}var G=function(){if(v.hasClass(f)){return N()}else{return false}};s(document).on("click","li.dropdown a",function(){if(G())return;var a=s(this),e=a.parent("li");s(".dropdown-mega").removeClass(C);if(e.parent("ul").hasClass(u)){var n=h.find("."+C);if(n.hasClass("current"))n.removeClass(C);if(!e.hasClass("current")){e.addClass(C).addClass("current");n.removeClass("current")}else{e.removeClass(C).removeClass("current")}return false}else{if(e.hasClass(C)){a.parent("li").removeClass(C);if(e.parent("ul").hasClass(u)){h.find("."+C).removeClass(C)}}else{if(a.parent("li").children("ul").length>0){a.parent("li").addClass(C);return false}}}});s(document).on("click","li.dropdown-mega > a",function(){if(G())return;var a=s(this);var e=a.parent("li");if(e.hasClass(C)){e.removeClass(C)}else{h.find("."+C).removeClass(C).removeClass("current");e.addClass(C)}return false});s(document).mouseup(function(a){var e=s("."+u);if(e.has(a.target).length===0){h.find("."+C).removeClass(C).removeClass("current")}});s(document).on("click","."+r+", ."+o+", [data-sidebar-close]",function(){e.find("."+r).toggleClass(C);if(i==="sidebar"){e.find("."+t).toggleClass(C);e.find("."+o).toggleClass(C)}else if(i==="collapse"){e.find("."+d).toggleClass(C)}return false});function H(){var a=e.find(".dropdown-mega > a, .dropdown > a"),n='<span class="toggle">'+g+"</span>";a.each(function(){var a=s(this).text();s(this).html(a+n)});if(v.hasClass(p)||v.hasClass(m)||v.hasClass(w)||v.hasClass(x)||v.hasClass(b)){v.prepend('<a href="#" class="'+r+'"><span></span><span></span><span></span></a>')}}function I(s){var a;if(v.hasClass(p)||v.hasClass(m)||v.hasClass(w)||v.hasClass(x)||v.hasClass(b)){if(!B.length){e.append('<div class="'+t+" "+s+'">'+'<div class="'+t+'__close" data-sidebar-close>&times;</div>'+'<div class="'+t+'__content"></div>'+"</div>");K(e.find("."+t+"__content"))}else{a=B.detach();e.append(a);B.addClass(s)}e.append('<div class="'+o+" "+s+'"></div>')}}function J(){K(e.find("."+d))}function K(s){var a=h.clone().addClass("vg-nav-cloned");s.append(a)}function L(a,e){var n=s("."+t);if(a>=_&&e.xl){n.css("width",e.xl).css("right","-"+e.xl)}if(a<_&&a>=k&&e.lg){n.css("width",e.lg).css("right","-"+e.lg)}if(a<k&&a>=y&&e.md){n.css("width",e.md).css("right","-"+e.md)}if(a<y&&a>=W&&e.sm){n.css("width",e.sm).css("right","-"+e.sm)}if(a<W&&e.xs){n.css("width",e.xs).css("right","-"+e.xs)}}function N(){if(c.hasClass(p)){l=z}else if(c.hasClass(m)){l=M}else if(c.hasClass(w)){l=Q}else if(c.hasClass(x)){l=q}else if(c.hasClass(b)){l=A}else{l=j}return window.innerWidth>=l}return false}})(jQuery);