'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // DONE / COMMENT: What is this function doing? shows about hides articles and empties the list. then repopulates the list with repos that have a name.
  // Where is it called? called in repo.js
  // Does it call any other functions, and if so, in what file(s) do those function(s) live? ui function same file and with function in repo.js
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
