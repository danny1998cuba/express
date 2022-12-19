let express = require('express');
const midd = require('./middlewares')

const parser = require('body-parser')

require('dotenv').config()

let app = express();
app.use(parser.urlencoded({extended: false}))

app.use(midd.Logger)
app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function (req, res) {
  let message = { "message": "Hello json" }
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    message.message = message.message.toUpperCase();
  }
  res.json(message);
})

app.get('/now', midd.now, (req, res) => {
  res.json({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word })
})

app.route('/name').get((req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}`})
}).post((req, res) => {
  res.json({ name: `${req.body.first} ${req.body.last}`})
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



































module.exports = app;
