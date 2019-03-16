const restify = require('restify')
require('dotenv').config()
const { PORT, accountSid, authToken } = process.env

const client = require('twilio')(accountSid, authToken)

const server = restify.createServer()
server.use(restify.plugins.bodyParser())

server.post('/text', (req, res, next) => {
    console.log('recieved a POST!')

    client.messages
        .create({
            body: 'Test message from SMS-app',
            from: 'SMS-App',
            from: '+46769448149',
            to: '+46707486474'
        })
        .then((message) => {
            console.log('Message sent:')
            console.log(message)
        })

    res.send(200)
    next()
})

server.listen(PORT, () => {
    console.log(`Server running at: ${PORT}`)
})
