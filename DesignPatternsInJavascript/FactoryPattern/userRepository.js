var repo = function() {

  // Revealing module pattern:
  var get = function(id) {
    console.log('Getting user ' + id);
    return {
      name: 'new user from db'
    };
  };

  var save = function(user) {
    console.log('Saving ' + user.name + ' to the db');
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo;