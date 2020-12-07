const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 443
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Starts server
app.listen(port, function() {
  console.log('blogbot is listening on port ' + port)
})