
const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const Port = process.env.PORT || 5000
server.listen(Port, () => console.log(`Listening to ${Port}`))
