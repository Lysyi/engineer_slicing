'use strict';
console.log('home');

 
$(document).ready(function(){

  // menu
  $('ul.main-header--nav-block').hover(function(){
    $('.main-header--subnav-bg').fadeIn('fast');
  }, function(){
    $('.main-header--subnav-bg').fadeOut('fast');
  });

  $('ul.main-header--nav-block li').hover(function(){
    $(this).addClass('active', 500);
    $('ul:first',this).fadeIn('fast');
  }, function(){
    $(this).removeClass('active', 500);
    $('ul:first',this).fadeOut('fast');
  });

  // tab
  $('#tabs li a:not(:first)').addClass('inactive');
  $('.tab-container').hide();
  $('.tab-container:first').show();
      
  $('#tabs li a').click(function(e){
    e.preventDefault();
    var t = $(this).attr('id');
    if($(this).hasClass('inactive')){
      $('#tabs li a').addClass('inactive');
      $(this).removeClass('inactive');
      
      $('.tab-container').hide();
      $('#'+ t + 'c').fadeIn('slow');
    }
  });

  // scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    items:5
  });

});

