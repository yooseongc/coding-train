
const express = require('express');


const blobs = [];

function Blob(id, x, y, r) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = r;
}


const app = express();
const server = app.listen(process.env.PORT || 3000, () => {
    const { address, port } = server.address();
    console.log(`Example app listening at http://${address}:${port}`);
});

app.use(express.static('public'));
const io = require('socket.io')(server);

setInterval(() => io.sockets.emit('heartbeat', blobs), 33);
io.sockets.on('connection', (socket) => {
    console.log('We have a new client: ' + socket.id);
    socket.on('start', (data) => {
        console.log(`[${socket.id}] : x: ${data.x}, y: ${data.y}, r: ${data.r}`);
        const blob = new Blob(socket.id, data.x, data.y, data.r);
        blobs.push(blob);
    });
    socket.on('update', (data) => {
        const blob = blobs.filter(blob => blob.id === socket.id)[0];
        blob.x = data.x;
        blob.y = data.y;
        blob.r = data.r;
    });
    socket.on('disconnect', () => {
        console.log(`Client (${socket.id}) has disconnected.`);
        for (let i = blobs.length - 1; i >= 0; i--) {
            if (socket.id === blobs[i].id) {
                blobs.splice(i, 1);
            }
        }
    
    });
});
