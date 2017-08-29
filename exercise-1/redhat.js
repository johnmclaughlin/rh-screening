let test = {};

test.remoteMathService = function(cb) {
    var  one, two; 

    test.callOneService( function (err, num) {
        one  =  num; 
    });

    test.callTwoService( function (err, num) { 
        two  =  num;
    });

    setTimeout ( function () {
        return  cb( undefined , one  +  two); 
    },  2000 );
}

test.callOneService = function(cb) {  
    setTimeout ( function () {
        return  cb( undefined ,  1 ); 
    },  1000 );
}

test.callTwoService = function(cb) {  
    setTimeout ( function () {
        return  cb( undefined ,  2 ); 
    },  1500 );
}

test.remoteMathService( function (err, answer) {  
    if  (err)  console.log ( "error " , err);
    if  (answer  !==   3 ) {
        console.log ( "wrong answer" , answer); 
    }  else  {
        console.log ( "correct" ); 
    }
});

test.trial = function (a){
    return a*10;
}

module.exports = test;