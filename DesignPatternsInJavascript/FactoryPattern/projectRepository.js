var repo = function() {

  // Revealing module pattern:
  var get = function(id) {
    console.log('Getting project ' + id);
    return {
      name: 'new project from db'
    };
  };

  var save = function(project) {
    console.log('Saving ' + project.name + ' to the db');
  };

  return {
    get: get,
    save: save
  };
};

module.exports = new repo();
