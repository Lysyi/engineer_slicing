console.log("home"),$(document).ready(function(){$("ul.main-header--nav-block").hover(function(){$(".main-header--subnav-bg").fadeIn("fast")},function(){$(".main-header--subnav-bg").fadeOut("fast")}),$("ul.main-header--nav-block li").hover(function(){$(this).addClass("active",500),$("ul:first",this).fadeIn("fast")},function(){$(this).removeClass("active",500),$("ul:first",this).fadeOut("fast")}),$("#tabs li a:not(:first)").addClass("inactive"),$(".tab-container").hide(),$(".tab-container:first").show(),$("#tabs li a").click(function(a){a.preventDefault();var b=$(this).attr("id");$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".tab-container").hide(),$("#"+b+"c").fadeIn("slow"))}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,items:5})}),define("pages/home/main",function(){}),console.log("about"),$(document).ready(function(){$("ul.main-header--nav-block").hover(function(){$(".main-header--subnav-bg").fadeIn("fast")},function(){$(".main-header--subnav-bg").fadeOut("fast")}),$("ul.main-header--nav-block li").hover(function(){$(this).addClass("active",500),$("ul:first",this).fadeIn("fast")},function(){$(this).removeClass("active",500),$("ul:first",this).fadeOut("fast")}),$("#tabs li a:not(:first)").addClass("inactive"),$(".tab-container").hide(),$(".tab-container:first").show(),$("#tabs li a").click(function(a){a.preventDefault();var b=$(this).attr("id");$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".tab-container").hide(),$("#"+b+"c").fadeIn("slow"))}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,items:5})}),define("pages/about/main",function(){}),console.log("contact"),$(document).ready(function(){$("ul.main-header--nav-block").hover(function(){$(".main-header--subnav-bg").fadeIn("fast")},function(){$(".main-header--subnav-bg").fadeOut("fast")}),$("ul.main-header--nav-block li").hover(function(){$(this).addClass("active",500),$("ul:first",this).fadeIn("fast")},function(){$(this).removeClass("active",500),$("ul:first",this).fadeOut("fast")}),$("#tabs li a:not(:first)").addClass("inactive"),$(".tab-container").hide(),$(".tab-container:first").show(),$("#tabs li a").click(function(a){a.preventDefault();var b=$(this).attr("id");$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".tab-container").hide(),$("#"+b+"c").fadeIn("slow"))}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,items:5})}),define("pages/contacts/main",function(){}),console.log("services"),$(document).ready(function(){$("ul.main-header--nav-block").hover(function(){$(".main-header--subnav-bg").fadeIn("fast")},function(){$(".main-header--subnav-bg").fadeOut("fast")}),$("ul.main-header--nav-block li").hover(function(){$(this).addClass("active",500),$("ul:first",this).fadeIn("fast")},function(){$(this).removeClass("active",500),$("ul:first",this).fadeOut("fast")}),$("#tabs li a:not(:first)").addClass("inactive"),$(".tab-container").hide(),$(".tab-container:first").show(),$("#tabs li a").click(function(a){a.preventDefault();var b=$(this).attr("id");$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".tab-container").hide(),$("#"+b+"c").fadeIn("slow"))}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,items:5})}),define("pages/services/main",function(){}),console.log("services"),$(document).ready(function(){$("ul.main-header--nav-block").hover(function(){$(".main-header--subnav-bg").fadeIn("fast")},function(){$(".main-header--subnav-bg").fadeOut("fast")}),$("ul.main-header--nav-block li").hover(function(){$(this).addClass("active",500),$("ul:first",this).fadeIn("fast")},function(){$(this).removeClass("active",500),$("ul:first",this).fadeOut("fast")}),$("#tabs li a:not(:first)").addClass("inactive"),$(".tab-container").hide(),$(".tab-container:first").show(),$("#tabs li a").click(function(a){a.preventDefault();var b=$(this).attr("id");$(this).hasClass("inactive")&&($("#tabs li a").addClass("inactive"),$(this).removeClass("inactive"),$(".tab-container").hide(),$("#"+b+"c").fadeIn("slow"))}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1e3),!1}}),$(".owl-carousel").owlCarousel({loop:!0,margin:15,nav:!0,items:5})}),define("pages/service/main",function(){});