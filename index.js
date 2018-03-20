const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

server.listen(4000, () => {
  console.log('The server is running: http://localhost:4000')
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
io.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log('message: ' + msg)
  })
})
io.emit('some event', {
  for: 'everyone'
})
io.on('connection', socket => {
  socket.broadcast.emit('hi')
})
io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})