(() => {
  let filterButtons = document.querySelectorAll('.secF');
  let link = document.querySelectorAll('.movieLink');

  function fetchData() {
    let url = "api/" + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function toMainScreen() {
      let url = "watchMovies/" + this.id;

      fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
    }

  link.forEach(div => div.addEventListener('click', toMainScreen));
  filterButtons.forEach(button => button.addEventListener('click', fetchData));
})();
