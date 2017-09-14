'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE COMMENT: What is this function doing? SHows about, hides the siblings of the section id, which is articles.  Gets the data from github API and appends it to index
 // Where is it called?  routes.js
 //Does it call any other functions, and if so, in what file(s) do those function(s) live? requestRepos and repoView.index
  // (put your response in a comment here)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
