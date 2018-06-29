
let assert = require('assert');
let main = require( '../lib/mathe.js');





describe('Erster test', function() {
  describe('rechne', function(done) {
    it('Hier sollte nun die Zahl 8 erscheinen', function() {
        assert.equal(3.1415926, main.PI);
      });
  });

});