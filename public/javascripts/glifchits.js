/*
 * glifchits.js
 * 
 * George Lifchits
 * August 16, 2013
 *
 * Javascript for my personal website
 */

$(document).ready(function(){
  // textarea autoresize functionality
  $('textarea').autosize();

  var iframeResize = function() { 
    var padding = $(".container > div").css("padding-left");
    padding = parseFloat(padding.substring(0, padding.length - 2))
    var width = window.innerWidth - (2 * padding);
    var height = width * (11/8.5);
    $("#resume iframe").css('height', height);
  };
  iframeResize();

  // resume autoresize
  $(window).resize(iframeResize);
  
  // email validation
  var isValidEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  $('input#email').keyup(function() {
    var emailInput = $(this).val();
    if (isValidEmail(emailInput)) 
      $(this).addClass('valid');
    else
      $(this).removeClass('valid');
  });

  // alert box close
  $('.alert div').append('<div class="close"><i class="icon-remove"></i></div>');
  $('.close i').click(function() {
    $('.alert div').css('display','none');
  });
});

