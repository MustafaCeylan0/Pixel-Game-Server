const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 4000 ;

// database setup
const mongoose = require('mongoose');
const connectionString = '**Deleted for security reasons**';
const connectDB = require('./config/db');

// controllers
const { updatePixel, getAllPixels } = require('./controllers/pixel');

// connect to database
connectDB(connectionString);


// routes
io.on('connection',async (socket) => {
    console.log('a user connected');

    socket.on('pixels',async () => {
        let pixels = await getAllPixels();
        socket.emit('pixels', pixels);
    });

    socket.on('updatePixel', async (data) => {
        console.log(data);
        const { x, y, value } = data;
        await updatePixel(x, y, value);
        io.emit('updatePixel', { x: x, y: y, value: value });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
});

http.listen(port, () => {
    console.log('listening on *:' + port);
});