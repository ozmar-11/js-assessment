exports = typeof window === 'undefined' ? global : window;


exports.countAnswers = {
	start: undefined,
	end: undefined,
	interval: undefined,
	increment: function() {
		this.start = this.start + 1;
	},
	setInterval: function() {

		this.print();

		return setInterval(function() {
			if(this.start < this.end) {
				this.increment();
				this.print();

			}
 		}.bind(this), 100)
	},

	print: function() {
		return console.log(this.start);
	},

	cancel: function() {
		clearInterval(this.interval);
	},

    count: function (start, end) {
	  		this.start = start;
	  		this.end = end;

	  	this.interval = this.setInterval();

	  	return this;
  	}
};
