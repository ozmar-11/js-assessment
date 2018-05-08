exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	fileNames = [];
  	function recursiveFunction(data, dirName, fileNames) {
  		for(var i = 0; i < data.files.length || !foundedDir; i++) {
	  		if(typeof data.files[i] === 'string' && (!dirName || dirName && dirName === data.dir)) {
	  			fileNames.push(data.files[i]);
	  			dirName = undefined;
	  			foundedDir = true;
	  		} else if(typeof data.files[i] !== 'string') {
	  			recursiveFunction(data.files[i], dirName, fileNames);
	  		}
	  	}
	  	return fileNames;
  	};

  	result = recursiveFunction(data, dirName, fileNames);
  	return result;
  },

  permute: function(arr) {
  	var copiedArr = arr.slice();
  	var permutadedArr = [];

  	function switchItems(array, currentPermutation) {
  		if (array.length > 0) {
	  		for(var i = 0; i < array.length; i++) {
	  			var remainingItems = array.slice();
	  			var headItem = remainingItems.splice(i, 1);
	  			switchItems(remainingItems, currentPermutation.concat(headItem));
	  		}
  		} else {
  			permutadedArr.push(currentPermutation);
  		}
  	}

  	switchItems(copiedArr, []);
  	return permutadedArr;
  },

  fibonacci: function(n) {
  	function calFibonacci(goal, currentNumber, prevNumber, currentIteration) {
  		if (!result)
  			result = 0;
  		if (result < currentNumber)
  			result = currentNumber;

  		if(currentIteration !== goal){
  			prevNumber = prevNumber;
  			currentNumber = currentNumber;
  			var aux = currentNumber;
  			currentNumber += prevNumber;
  			prevNumber = aux;
  			calFibonacci(goal, currentNumber, prevNumber, ++currentIteration);
  		}
  		return result;
  	}
  	var result = calFibonacci(n, 1, 0, 1);
  	return result;
  },

  validParentheses: function(n) {
  	var combinations = [];

  	function createParetheses(total, position, currentCombination, open, close) {
  		if(close < total) {
  			if(close < open) {
  				currentCombination = currentCombination.substr(0, position) +')'+ currentCombination.substr(position+1, currentCombination.length);
  				createParetheses(total, position+1, currentCombination, open, close+1);
  			}

  			if(open < total) {
  				currentCombination = currentCombination.substr(0, position) +'('+ currentCombination.substr(position+1, currentCombination.length);
	  			createParetheses(total, position+1, currentCombination, open+1, close);
  			}
  		} else {
  			combinations.push(currentCombination);
  		}
  	}

  	createParetheses(n, 0, '', 0, 0);
  	return combinations;
  }
};
