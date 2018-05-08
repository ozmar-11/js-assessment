exports = typeof window === 'undefined' ? global : window;

function Greeting(greeting, name) {
	this.greeting = greeting;
	this.name = name;
	this.sayIt =  function () {
		return this.greeting+', '+this.name;
	}
}

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  	return new Greeting(str1, str2);
  }
};
