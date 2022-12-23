require('dotenv').config();
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();

const { generateShort, validateUrl, uris } = require('./middlewares')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.route('/api/shorturl/:shorted?')
  .get((req, res) => {
    let param = req.params.shorted
    if (param) {
      let uri = uris.find(el => el.short == param)
      if (uri) {
        res.redirect(uri.full)
      } else {
        res.sendStatus(404)
      }
    } else {
      res.sendStatus(404)
    }
  })
  .post(validateUrl, generateShort, (req, res) => {
    uris.push({ short: req.short, full: req.body.url })
    res.json({ original_url: req.body.url, short_url: req.short })
  })

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
