const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);
var fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
	let json = fs.readFileSync('questions.json');
	let questions = JSON.parse(json);
	socket.emit('questions', questions);
});

http.listen(port, () => {
	console.log(`Listening on localhost:${port}`);
});