const express = require('express')
const bodyParser = require('body-parser')
const webAPI = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')

const port = process.env.PORT || 443
const app = express()
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)

app.use('/slack/events', slackEvents.expressMiddleware())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Starts server
app.listen(port, function() {
  console.log('blogbot for glitch is listening on port ' + port)
})

slackEvents.on('app_mention', async (event) => {
  try {
    console.log("I got a mention in this channel", event.channel)
  } catch (e) {
    console.log("something went wrong with that mention: ", e)
  }
})