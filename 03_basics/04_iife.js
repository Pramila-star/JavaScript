// Immediately Invoked Function     Expressions (IIFE)

(function chai() {

    // named IIFE
    console.log("DB CONNECTED");
    
}) ();

 // WE USED IIFE TO REMOVE THE POLUTION CAUSED IN GLOBAL SCOPE

 ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
 }) ("Purnima")  