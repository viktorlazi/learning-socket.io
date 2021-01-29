const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
 
io.on('connection', (socket) => {
  console.log('a user connected');
});