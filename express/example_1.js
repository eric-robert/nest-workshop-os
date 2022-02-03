// Include packages in JavaScript with the 'require' function
const express = require('express')

// Express is a web application framework for Node.js
const app = express()

// Setup routes for the application
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
app.listen(3000)