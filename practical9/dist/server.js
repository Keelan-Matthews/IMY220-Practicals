"use strict";

var express = require('express');
var app = express();
var port = 3000;
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs');
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
  var json = fs.readFileSync('questions.json');
  var questions = JSON.parse(json);
  socket.emit('questions', questions);
});
http.listen(port, function () {
  console.log("Listening on localhost:".concat(port));
});