
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
  var subject = req.body.subject;
  var message = req.body.message;
  console.log(sender, subject, message);
  
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: config.email,
        pass: config.emailPassword
    }
  });

  console.log('config email '+config.email);
  console.log('config emailpass '+config.emailPassword);

  var mailOptions = {
    from: sender,
    to: 'george.lifchits@gmail.com',
    subject: subject,
    text: message
  }

  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
  });
  res.render('index', { message: "Email sent!" });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
