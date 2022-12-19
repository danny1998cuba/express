let express = require('express');
const midd = require('./middlewares')
require('dotenv').config()

let app = express();

app.use(midd.Logger)
app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
  let message = { "message": "Hello json" }
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    message.message = message.message.toUpperCase();
  }
  res.json(message);
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



































module.exports = app;
