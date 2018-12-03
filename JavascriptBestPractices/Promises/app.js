// Improved callbacks using PromiseJS
function asyncMethod(message) {
  return new Promise(function(fulfill, reject) {
    setTimeout(function() {
      console.log(message);
      fulfill();
     }, 500);
  });
}

// simple API that allows declarative wireup!
function findUser() {
  return asyncMethod('Find User');
}

function validateUser() {
  return asyncMethod('Validate User');
}

function doStuff() {
  return asyncMethod('Do stuff');
}

asyncMethod('Open DB Connection')
  .then(findUser)
  .then(validateUser)
  .then(doStuff)
  .then(function() {});

// second level cleanup - broke functions out
/* function findUser() {
  asyncMethod('Find User').then(validateUser);
}

function validateUser() {
  asyncMethod('Validate User').then(doStuff);
}

function doStuff() {
  asyncMethod('Do stuff').then(function() { });
}

asyncMethod('Open DB Connection').then(findUser); */


// first level cleanup below
/* asyncMethod('Open DB Connection').then(function() {
  asyncMethod('Find User').then(function() {
    asyncMethod('Validate User').then(function() {
      asyncMethod('Do stuff').then(function() { });
    });
  });
}); */

// below was the impl without PromiseJS
/* function asyncMethod(message, cb) {
  setTimeout(function() {
    console.log(message);
    cb();
   }, 500);
}

asyncMethod('Open DB Connection', function() {
  asyncMethod('Find User', function() {
    asyncMethod('Validate User', function() {
      asyncMethod('Do stuff', function() { });
    });
  });
}); */