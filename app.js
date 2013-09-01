/* Modules */
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
  var subject = req.body.subject;
  var message = req.body.message;
  
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: config.email,
        pass: config.emailPassword
    }
  });

  // email validation
  var isValidEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  var result = {
    success: false
  }

  if (!sender) {
    result.msg = "No email provided.";
    res.send(result);
  }
  else if (!(isValidEmail(sender))) {
    result.msg = "The provided email '" + sender + "' is invalid.";
    res.send(result);
  }
  else if (!subject && !message) {
    result.msg = "No subject or message provided.";
    res.send(result);
  }
  else {
    smtpTransport.sendMail({
        from: sender,
        to: 'george.lifchits@gmail.com',
        subject: subject,
        text: "sent from: " + sender + "\n" + message
      }, function(error, response){
      if(error) {
        console.log("Error: " + error);
        result.msg = "An error occurred! Your email was not sent.";
      }
      else {
        console.log("Message sent: " + response.message);
        result.success = true;
        result.msg = "Email sent! I'll get back to you in a bit.";
      }
      res.send(result);
    });
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
