exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(prevItem, currentItem) {
      return prevItem + currentItem;
    });
  },

  remove: function(arr, item) {
    index = 0;
    array_length = arr.length;
    while(index < array_length) {
      if(arr[index] === item) {
        arr.splice(index, 1);
        array_length--;
        index--;
      }
      index++;
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    return this.remove(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0 , item)
    return arr;
  },

  count: function(arr, item) {
    timesSeen = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item)
        timesSeen++;
    }
    return timesSeen;
  },

  duplicates: function(arr) {
    duplicatedItems = [];
    arr.sort();
    for(var i = 0; i < arr.length; i++) {
      if(i > 0 && arr[i] === arr[i-1] && duplicatedItems.indexOf(arr[i]) === -1)
        duplicatedItems.push(arr[i]);
    }
    return duplicatedItems;
  },

  square: function(arr) {
    return arr.map(function(item){
      return Math.pow(item, 2);
    });
  },

  findAllOccurrences: function(arr, target) {
    positionOcurrence = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] == target)
        positionOcurrence.push(i);
    }
    return positionOcurrence;
  }
};
