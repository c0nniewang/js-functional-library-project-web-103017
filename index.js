fi = (function() {
  return {
    each: function(collection, iteratee) {
      for (i in Object.keys(collection)) {
        iteratee(collection[i], i, collection);
      }
      return collection;
    },
    // come back and refactor with each
    map: function(collection, iteratee) {
      let output = []
      for (let i = 0; i < collection.length; i++) {
        output.push(iteratee(collection[i], i, collection));
      }
      return output;
    },
    reduce: function(collection, iteratee, acc) {
      for (i in Object.keys(collection)) {
        acc = iteratee(acc, collection[i], collection);
      }
      return acc;
    },
    find: function(collection, predicate) {
      for (i in Object.keys(collection)) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },
    filter: function(collection, predicate) {
      let output = [];
      for (i in Object.keys(collection)) {
        if (predicate(collection[i])) {
          output.push(collection[i]);
        }
      }
      return output;
    },
    size: function(collection) {
      let total = 0;
      for (i in Object.keys(collection)){
        total++;
      }
      return total;
    },
    first: function(array, n) {
      let x = (n === undefined ? 0 : n);
      return array.slice(0, x);
    },
    last: function(array, n) {
      let x = (n === undefined ? 1 : n);
      return array.slice(-x);
    },
    compact: function(array) {
      let output = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] !== false){
          output.push(array[i]);
        }
      }
      return output;
    },
    // refactor
    sortBy: function(array, iteratee) {
      let output = {}
      let outputArray = []
      let finalOutput = []
      for (let i = 0; i < array.length; i++) {
        output[iteratee(array[i])] = array[i];
        outputArray.push(iteratee(array[i]))
      }
      for (i of outputArray.sort(function(a,b){
        return a - b;
      })){
        finalOutput.push(output[i]);
      }
      return finalOutput;
    },
    flatten: function(array, shallow){
      let output = [];

      for (let i of array) {
        if (typeof i === 'object') {
          let x = fi.flatten(i)
          output = output.concat(x)
        } else {
          output.push(i);
        }
      } 
      return output;
    },
    uniq: function(array, isSorted, iteratee){
      let newarr = [];
      let output = [];

      const helper = function(i) {
        if (typeof iteratee !== 'undefined') {
          return iteratee(i);
        } else {
          return i;
        }
      }

      if (isSorted === true) {
        for (let i of array) {
          if (newarr.last !== helper(i)) {
            newarr.push(helper(i));
            output.push(i);
          }
        }
      } else {for (let i of array) {
        if (!newarr.includes(helper(i))) {
          newarr.push(helper(i));
          output.push(i);
        }
      }
    }
    return output;
    },

    keys: function(object){
      let output = []
      for (i in object) {
        output.push(i);
      }
      return output;
    },
    values: function(){
      let output = []
      for (i in object) {
        output.push(object[i])
      }
      return output;
    },
    functions: function(object){

    }
  }
})()

fi.flatten([1, [2], [3, [[4]]]])
