const express = require('express')
const http = require('http')

const app = express()

const port = process.env.PORT || 3001

app.use(express.static(__dirname))

app.get('*', function(req, res) {
  res.redirect('/')
})

const server = http.createServer(app)

server.listen(port, () => console.log(`Server running in ${port}`))
