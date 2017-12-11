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
    find: function() {

    },
    filter: function() {

    },
    size: function() {

    },
    first: function() {

    },
    last: function() {

    }
    compact: function() {

    },
    sortBy: function() {

    },

  }
})()