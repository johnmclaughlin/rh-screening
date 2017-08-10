function   remoteMathService (cb) {
    var  one, two; 

    callOneService( function (err, num) {
        one  =  num; 
        console.log('one: '+one);
    });

    callTwoService( function (err, num) { 
        two  =  num;
        console.log('two: '+two);
    });

    return  cb( undefined , one  +  two); 
}

function   callOneService (cb) {  
    setTimeout ( function () {
        return  cb( undefined ,  1 ); 
    },  1000 );
    console.log('cb: '+cb);
}

function   callTwoService (cb) {  
    setTimeout ( function () {
        return  cb( undefined ,  2 ); 
    },  1500 );
    console.log('cb: '+cb);
}

remoteMathService( function (err, answer) {  
    if  (err)  console .log ( "error " , err);  
    if  (answer  !==   3 ) {
        console.log('answer: '+answer);
        console .log ( "wrong answer" , answer); 
    }  else  {
        console .log ( "correct" ); 
    }
});