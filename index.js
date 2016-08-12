var express = require("express");
var app = express();
var path = require("path");


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/rob-macintyre.html'));
});

app.get('/styles.min.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/styles.min.css'));
});

app.use("/img", express.static(__dirname + '/img'));

app.listen(3000);
console.log("Running at Port 3000");