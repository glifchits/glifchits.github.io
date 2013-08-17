
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , nodemailer = require('nodemailer')
  , config = require('./config.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// home page
app.get('/', function(req, res) {
  res.render('index');
}); 

// handles emails
app.post('/mail', function(req, res) {
  var sender = req.body.sender;
  var subject = req.body.subject || '(No subject) Email from website contact';
  var message = req.body.message || '<No message content>';
  console.log(sender, subject, message);
  
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: config.email,
        pass: config.emailPassword
    }
  });

  var mailOptions = {
    from: sender,
    to: 'george.lifchits@gmail.com',
    subject: subject,
    text: message
  }


  smtpTransport.sendMail(mailOptions, function(error, response){
    var resultMsg = '';
    if(error) {
      console.log("Error: " + error);
      resultMsg = "An error occurred! Your email was not sent.";
    }
    else {
      console.log("Message sent: " + response.message);
      resultMsg = "Email sent! I'll get back to you in a bit.";
    }
  res.render('index', { message: resultMsg });
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
