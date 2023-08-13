const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    socket.on('chat message', (message) => {
        console.log('Mensaje recibido:', message);
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
