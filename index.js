const restify = require('restify')
require('dotenv').config()

const { PORT } = process.env

const server = restify.createServer()

server.post('/text', (req, res, next) => {
    console.log('recieved a POST!')
    res.send(200)
    next()
})

server.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})
