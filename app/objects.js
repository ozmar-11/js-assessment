exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.bind(obj)();
  },

  alterObjects: function(constructor, greeting) {
  	return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var properties = Object.getOwnPropertyNames(obj);
  	var result = [];

  	for(var i = 0; i < properties.length; i++) {
  		result.push(properties[i]+': '+obj[properties[i]]);
  	}

  	return result;
  }
};
