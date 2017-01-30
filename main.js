(function() {
  var name = 'world';

  var Greeter = {
    greet: function() {
      console.log('Hello ' + name);
    }
  }

  // NodeJS or browser export
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Greeter;
  } else {
    window.Greeter = Greeter;
  }
})();
