var errs = [
  [ 503, 'Uhoh something went wrong!'],
  [ 501, 'Oh wow, 501.. that sounds bad :/'],
  ['ENOENT', 'They went to search for the ENTwives'],
  ['EACCES', 'We could not afford a second "S" :('],
  [ 418, 'I\'m a teapot']
];

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

module.exports = function (opts) {
  opts = opts || {}
  var frequency = opts.frequency || 0.6 // throw ~60% of time
  return function(req, res, next){
    if(shouldThrow(frequency)){
      next(makeError(pickRandom(errs)));
    }else{
      next();
    }
  }
};
