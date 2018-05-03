exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
    return function(str2) {
      return str+', '+str2;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return function() {
        return fn(item);
      }.bind(this);
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }.bind(this);
  },

  useArguments: function() {
    return Object.values(arguments).reduce(function(prevValue, currentValue) {
      return prevValue + currentValue;
    });
  },

  callIt: function(fn) {
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = [];

    for(var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return function() {
      return fn.apply(null, args.concat(Object.values(arguments)));
    }
  },

  curryIt: function(fn) {
    var args = [];

    return function(a) {
      return function(b){
        return function(c) {
          return fn(a,b,c);
        }
      }
    }
  }
};
