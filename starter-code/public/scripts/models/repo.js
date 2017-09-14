'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE /COMMENT: What is this function doing? gets the repos data assigns it to repos.all and executes a callback
  // Where is it called? aboutController.js
  // Does it call any other functions, and if so, in what file(s) do those function(s) live? repoView.index in repoView.js
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
      .then(data => repos.all = data, err => console.error(err))
      .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
