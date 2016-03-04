'use strict';

// Requiring express, socket.io, and native http
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const ws = require('socket.io')(server);

// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;
// Using jade
app.set('view engine', 'jade');
// Using the "public" folder
app.use(express.static('public'));
// Rendering index.jade
app.get('/', (req, res) => {
    res.render('index');
});
// Server listening
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
// Connection bridge for socket
ws.on('connection', socket => {
    console.log('socket connected', socket.id);

    socket.on('playTurn', gameArray => {
        console.log("play",gameArray);
        socket.broadcast.emit('receiveTurn', [gameArray]);
    });

    socket.on('gameWin', status => {
        console.log("status", status);
        socket.broadcast.emit('winNotice', status)
    })
});
