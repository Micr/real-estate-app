var favicon = require('serve-favicon');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9999));
app.use(favicon(__dirname + '/favicon.ico'));

app.use("/static", express.static('static'));
app.use("/data", express.static('data'));

app.get("favicon.ico", function (req, res) {
  res.sendFile(__dirname + '/favicon.ico')
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function () {
  console.log('The app is listening on port', app.get('port'));
});
