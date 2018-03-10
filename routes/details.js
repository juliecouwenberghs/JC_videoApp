router.get('/:id', (req, res) => {
  console.log(req.params.id);
  console.log('hit an api route with params');

  connect.query(SELECT * FROM tbl_movies WHERE movies_genre="${req.params.id}", (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('movies', {
        userDetails: result
        // res.json({userMovieData: result});
    });
    }
  });
});

module.exports = router;
