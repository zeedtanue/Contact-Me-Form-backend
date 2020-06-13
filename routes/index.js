var express = require('express');
var router = express.Router();
const formController = require('../controllers/form'); //controller for form

formController
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//contact me form post
router.post('/send',  formController.sendInfo);

module.exports = router;
