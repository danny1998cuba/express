var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload')
require('dotenv').config()

var app = express();

app.use(cors());
app.use(fileUpload())
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', function (req, res) {
  if (!req.files) {
    res.status(400).send("No files were uploaded.");
  }

  const file = req.files.upfile

  res.json({
    name: file.name,
    type: file.mimetype,
    size: file.size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
