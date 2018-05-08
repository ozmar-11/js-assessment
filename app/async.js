exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject){
  		setTimeout(function() { resolve(value); }, 1000);

  	});
  },

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve, reject) {
  		var request = new XMLHttpRequest();
  		request.open('GET', url);

  		request.onload = function() {
  			if(request.status === 200) {
  				var parsedResponse = JSON.parse(request.response);
  				var sortedValues = parsedResponse['people'].map(function(item){ return item['name']; }).sort();
  				resolve(sortedValues);
  			} else {
  				reject(Error(request.statusText));
  			}
  		}

  		request.onerror = function() {
  			reject(Error('Network Error'));
  		}

  		request.send();
  	});
  }
};
