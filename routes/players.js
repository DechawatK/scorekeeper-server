var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json([{
      name: 'John Doe',
      scores: [1, 2],
      roundScore: 999
    },
    {
      name: 'Jane Doe',
      scores: [2, 1],
      roundScore: 999
    },
  ]);
});

module.exports = router;