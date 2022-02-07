const express = require('express')
const app = express()
app.use(express.json())

// Same as before

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

app.use(
    (req, res, next) => {
        const now = new Date()
        const route = req.baseUrl + req.path
        console.log(`${now.toISOString()} - ${req.method} ${route} with body ${JSON.stringify(req.body)}`)
        next()
    }
)

// Switching to use post requests

app.get('/:account_id', 
    (req, res) => {
        const account_id = req.params.account_id
        const messages = read_messages(account_id)
        res.send({ messages })
    }
)

// Here post is used instead of get
app.post('/:account_id', 
    (req, res) => {
        const account_id = req.params.account_id
        const message = req.body.message
        send_message(account_id, message)
        res.send('Message sent')
    }
)

app.get('/admin', 
    (req, res) => res.send(account_data))

app.listen(3000)