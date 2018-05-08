exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var binaryString = (num).toString(2);
  	return parseInt(binaryString[binaryString.length - bit]);
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	var binaryString = (num).toString(2);
  	var freeSlots = 8 - binaryString.length;
  	for(var i = 0; i < freeSlots; i++) {
  		binaryString = '0'+binaryString;
  	}
  	return binaryString;
  },

  multiply: function(a, b) {
  	var precisionDecimals = (b.toString().split('.')[1] || []).length
  	return parseFloat((a*b).toFixed(precisionDecimals));
  }
};
