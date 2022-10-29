const { application } = require('express');
var express = require('express');
const path = require('path');
var router = express.Router();


var rootPath = path.join(__dirname, '../');


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { messages });
});

router.post('/new', function (req, res, next) {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
  res.redirect('/')
});



router.get('*', function (req, res) {
  res.status(404).sendFile(path.join(rootPath, '/public/404.html'));
})

module.exports = router;
