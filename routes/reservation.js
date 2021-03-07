const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('reservation.html');
});

module.exports = router;
