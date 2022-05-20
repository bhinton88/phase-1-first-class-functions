
function receivesAFunction (callbackFunction) {
    callbackFunction();
    console.log('Hello, World!'); 
}

function returnsANamedFunction(){
    return function namedfunction(){
        console.log(`hello world`);
    };  
}

function returnsAnAnonymousFunction(){
    return () => console.log('Hello World'); 
}