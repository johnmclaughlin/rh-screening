
//let test = require('../mathService.js')
//let assert = require('assert');
describe('small test', function(){
    it('tiny test case', function(done){
        console.log('waiting 3 seconds');
        setTimeout(function(){
            console.log('waiting over.');
            done();
        }, 3000)
    })
 });