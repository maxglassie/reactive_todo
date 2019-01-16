const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    sentence: 'respond with a resource'
  });
});

module.exports = router;