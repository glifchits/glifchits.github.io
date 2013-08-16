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
});

