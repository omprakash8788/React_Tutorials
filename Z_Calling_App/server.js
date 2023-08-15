// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('offer', offer => {
    // Handle the received offer and send an answer back (signaling step)
    // You would implement your own logic to manage user connections
  });

  socket.on('ice-candidate', candidate => {
    // Handle ICE candidates and send them to the other user (signaling step)
    // You would implement your own logic to manage user connections
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    // Clean up user resources and connections
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
