const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const db = require('./db')

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const routes = require('./routes/users.routes')
app.use('/api', routes)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
