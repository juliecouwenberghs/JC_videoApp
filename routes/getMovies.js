var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  connect.query('SELECT movies_title, movies_rating, movies_picture FROM tbl_movies', (err, result) => {
    if (err) {
      throw err,
      console.log(err);
    } else {
      console.log(result);

      res.render('parents_home', {
        title: 'MOVIES',
        movies : result
      });
    }
  });

});

module.exports = router;
