'use strict';
var
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  parser = require('body-parser');

app.use(paraser.urlendcode({extended:false}));
app.use(parser.json());
app.use(express.static(__dirname + '/public'))

app.get('/api/projects', function (req, res, next) {
  res.status(200).json('今から実装します');
  return next();
});

app.get('/api/notfound/:id', function (req, res, next) {
  var id = req.params.id;
  res.json(id);
  return next();
});

app.post('/api/badrequest', function (req, res, next) {
  res.status(400).json('BadRequest');
  return next();
})

app.listen(port, function () {
  console.log('Server running with port', port);
});