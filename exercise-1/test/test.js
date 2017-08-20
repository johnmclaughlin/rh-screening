
let test = require('../redhat.js')
let assert = require('assert');
describe('Remote Math Service', function() {
  describe('Call One Service', function() {
    it('should return 1', function() {
        assert.equal(1, test.callOneService(1));
    });
  });
  describe('Call Two Service', function() {
    it('should return 2', function() {
        assert.equal(2, test.callTwoService(2));
    });
  });
  describe('Remote Math Service', function() {
    it('should return correct', function() {
        assert.equal('correct', test.remoteMathService(1  +  2));
    });
  });
  describe('Trial', function() {
    it('should return 20', function() {
        assert.equal(20, test.trial(2));
    });
  });
});