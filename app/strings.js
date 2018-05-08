exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var currentCharacter = str[0];
  	var resultString = '';
  	var count = 0;

  	for(var i = 0; i < str.length; i++) {
  		if(str[i] === currentCharacter && count < amount) {
  			resultString += str[i];
  			count++;
  		} else if(str[i] !== currentCharacter) {
  			currentCharacter = str[i];
  			resultString += str[i];
  			count = 1;
  		}
  	}
  	return resultString;
  },

  wordWrap: function(str, cols) {
  	var resultString = str;
  	var blankSpaceIndexes = [];
  	var requiredBreakLines = Math.floor((str.length-1)/cols);

  	function getClosesBlankSpaceFrom(index, arr) {
  		var currentDifference = 0;
  		var minDifference = Math.abs(arr[0] - cols);
  		var indexOfMinDiff = 0;

  		for (var i = 0; i < arr.length; i++) {
  			currentDifference = Math.abs(arr[i] - cols);
  			if(currentDifference < minDifference) {
  				 minDifference = currentDifference;
  				 indexOfMinDiff = i;
  			}
		}

		return indexOfMinDiff;
  	}

  	for(var i = 0; i < str.length; i++) {
  		if(str[i] === ' ')
  			blankSpaceIndexes.push(i);
  	}

  	var i = 0;
  	while(requiredBreakLines > i && blankSpaceIndexes.length > 0) {
  		closesBlankSpaceIndex = getClosesBlankSpaceFrom(i*cols, blankSpaceIndexes);
  		closesBlankSpace = blankSpaceIndexes[closesBlankSpaceIndex];
  		blankSpaceIndexes.splice(closesBlankSpaceIndex, 1);
  		resultString = resultString.substr(0, closesBlankSpace) + '\n' + resultString.substr(closesBlankSpace+1, resultString.length);
  		i++;
  	}

  	return resultString;
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
