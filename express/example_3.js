const express = require('express')
const app = express()

// Simple http-basted messaging service
// there are MUCH better ways to do this, this is just a demo

const account_data = {}

function read_messages (account_id) {
    return account_data[account_id] || []
}

function send_message (account_id, message) {
    if ( account_data[account_id] === undefined ) {
        account_data[account_id] = []
    }
    account_data[account_id].push(message)
}

// Allow users to send messages to eachother
// NOTE: THIS IS NOT SECURE, DO NOT USE THIS
// But you can see how requests can be used to send messages

app.use(
    (req, res, next) => {
        const now = new Date()
        const route = req.baseUrl + req.path
        console.log(`${now.toISOString()} - ${req.method} ${route}`)
        next()
    }
)

app.get('/:account_id/messages', 
    (req, res) => {
        const account_id = req.params.account_id
        const messages = read_messages(account_id)
        res.send({ messages })
    }
)

app.get('/:account_id/send/:message', 
    (req, res) => {
        const account_id = req.params.account_id
        const message = req.params.message
        send_message(account_id, message)
        res.send('Message sent')
    }
)

app.get('/admin', 
    (req, res) => res.send(account_data))

app.listen(3000)