exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return str.match(/\d/) ? true : false;
  },

  containsRepeatingLetter: function(str) {
    return str.match(/([A-Z,a-z]).*\1+/) ? true : false
  },

  endsWithVowel: function(str) {
    return str.match(/[a,e,i,o,u]$/i) ? true : false
  },

  captureThreeNumbers: function(str) {
    matches = str.match(/\d{3}/)
    return matches ? matches[0] : false
  },

  matchesPattern: function(str) {
    return str.match(/^\d{3}-\d{3}-(\d{4})$/) ? true :  false
  },

  isUSD: function(str) {
    return str.match(/^(\$(\d){1,3},?)((\d{3},?)*)(\.\d{2}|)$/) ? true : false
  }
};
