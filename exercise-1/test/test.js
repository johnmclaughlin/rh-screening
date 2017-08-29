
let test = require('../redhat.js')
let assert = require('assert');
describe('Remote Math Service', function() {
  describe('Call One Service', function() {
    it('should return 1', function(done) {
        assert.equal(1, test.callOneService());
        done();
    });
  });
  describe('Call Two Service', function() {
    it('should return 2', function(done) {
        assert.equal(2, test.callTwoService());
        done();
    });
  });
  describe('Remote Math Service', function() {
    it('should return correct', function(done) {
        assert.equal('correct', test.remoteMathService(function (err, answer) {  
          if  (err)  console.log ( "error " , err);
          if  (answer  !==   3 ) {
              console.log ( "wrong answer" , answer); 
          }  else  {
              console.log ( "correct" ); 
          }
      }));
        done();
    });
  });
  describe('Trial', function() {
    it('should return 20', function() {
        assert.equal(20, test.trial(2));
    });
  });
});