var errs = [
  [ 503, 'Uhoh something went wrong!'],
  [ 501, 'Oh wow, 501.. that sounds bad :/'],
  ['ENOENT', 'no such file or directory \'cake\''],
  ['EACCES', 'permission denied, mkdir \'/Users/sequoia/cake\''],
  [ 418, 'I\'m a teapot']
];

var defaultFrequency = 0.6; //throw ~60% of time

function shouldThrow(threshold){
  return Math.random() < threshold;
}

function pickRandom(ray){
  return ray[Math.floor(Math.random() * ray.length)];
}

function makeError(err){
  var e = new Error(err[1]);
  e.code = err[0];
  return e;
}

function thrower(frequency){
  return function (req, res, next){
    if(shouldThrow(frequency)){
      next(makeError(pickRandom(errs)));
    }else{
      next();
    }
  };
}

module.exports = thrower(defaultFrequency);
module.exports.frequency = thrower;
