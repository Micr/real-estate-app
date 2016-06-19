var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9999));

app.use("/static", express.static('build'));

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function () {
  console.log('The app is listening on port', app.get('port'));
});
