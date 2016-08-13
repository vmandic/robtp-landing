var express = require("express");
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/rob-macintyre.html'));
});

// app.get('/styles.min.css', function(req, res) {
//     res.sendFile(path.join(__dirname + '/styles.min.css'));
// });

// app.use("/img", express.static(__dirname + '/img'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});