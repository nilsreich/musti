let assert = require('assert');
let zahl = require('../main.js')




describe('Erster test', function() {
  describe('rechne', function(done) {
    it('Hier sollte nun die Zahl 8 erscheinen', function() {
        assert.equal(8, zahl.rechne(4));
      });
  });

});