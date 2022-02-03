const express = require('express')
const app = express()

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


app.listen(3000)