/*
 * glifchits.js
 * 
 * George Lifchits
 * August 16-31, 2013
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

  // alert box close
  $('.close i').click(function() {
    $('.alert').css('display','none');
  });

  var pxToFloat = function(px) {
    return parseFloat(px.substring(0, px.length - 2));
  }

  // alert box align
  var alertAlign = function() {
    var width = pxToFloat($('.container > div').css('width'));
    var padLeft = pxToFloat($('.container > div').css('padding-left'));
    var alertBox = $('.alert');
    alertBox.css('width', width);
    alertBox.css('margin-left', padLeft);
  };
  $(window).resize(alertAlign);
  alertAlign();

  // submit email
  $('.contact #send').click(function() {
    var alertBox = $('.alert');
    var alertText = $('.alert .message');

    var emailData = {
      'sender': $('form [name=sender]').val(),
      'subject': $('form [name=subject]').val(),
      'message': $('form [name=message]').val()
    };
    
    alertBox.css('display', 'block');
    if (!emailData.sender)
      alertText.text("Please enter an email address I can reach you at!");
    else if (!(isValidEmail(emailData.sender)))
      alertText.text("That doesn't look like a valid email address. Try again!");
    else if (!emailData.subject && !emailData.message)
      alertText.text("Hmm, seems that you haven't entered a subject or message. What are you trying to say here?");
    else {
      alertText.text("Sending email...");
      $.ajax({
        type: 'POST',
        url: '/mail',
        data: emailData,
        success: function(res) {
          var msg = (res.success ? "" : "Your message wasn't sent! ") + res.msg;
          alertText.text(msg);
        },
        error: function() {
          alertText.text("An error occurred making the POST request.");
        }
      });
    };
  });
});

