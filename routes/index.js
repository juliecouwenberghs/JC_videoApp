var express = require('express');
var router = express.Router();
var config = require('../config');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
var toRender = (config.kidsmode) ? 'kids_home' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(toRender, {
    title: 'FLASHBACK',
    mainpage : true,
    kidsmode : config.kidsmode
  });
});

router.get('/parents_home', function(req, res, next){
  res.render("parents_home", {
    title: 'FLASHBACK',
    message : "Welcome Parents!"
    }
  )
});

router.get('/kids_home', function(req, res, next){
  res.render("kids_home", {
    title: 'FLASHBACK',
    message : "Welcome Kids!"
    }
  )
})

module.exports = router;
