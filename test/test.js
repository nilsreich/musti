let assert = require('assert');
import '../main.js';





describe('Erster test', function() {
  describe('rechne', function(done) {
    it('Hier sollte nun die Zahl 8 erscheinen', function() {
        assert.equal(8, square(4));
      });
  });

});