const express = require('express')
const app = express()
app.use(express.json())

// Using routers
const account_router = express.Router()
const admin_router = express.Router()

// AGAIN, THIS IS NOT SECURE, DO NOT USE THIS
const logs = []

// Using middleware
app.use(
    (req, res, next) => {
        const now = new Date()
        const route = req.baseUrl + req.path
        const log = `${now.toISOString()} - ${req.method} ${route} with body ${JSON.stringify(req.body)}`
        console.log(log)
        logs.push(log)
        next()
    }
)

// Using routers
app.use('/account', account_router);
app.use('/admin', admin_router);

// Adding functions to routers

account_router.get('/:account_id',
    (req, res) => {
        const account_id = req.params.account_id
        res.send({ account_id })
    }
)

admin_router.get('/:admin_secret',
    (req, res) => {
        const admin_secret = req.params.admin_secret
        if (admin_secret !== 'my_secret_pass123') 
            res.sendStatus(404)
        else
            res.send({ logs })
    }
)


app.listen(3000)