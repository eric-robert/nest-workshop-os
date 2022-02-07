const express = require('express')
const app = express()

let count = 0

app.use(
    (req, res, next) => {
        const now = new Date()
        const route = req.baseUrl + req.path
        console.log(`${now.toISOString()} - ${req.method} ${route}`)
        next()
    }
)

app.get('/hello', 
    (req, res) => res.send('Hello World!'))

app.get('/other_route', 
    (req, res) => res.send('Other Response'))

app.get('/count', 
    (req, res) => res.send({ count : ++count}))


app.listen(3000)