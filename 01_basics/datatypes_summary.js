// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 
// these are call by value

// typeScript= 

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId); // false


// Non primitive
//call by reference
//Arrays, Objects, Functions

let heroes = ["shaktiman", "naagraj", "doga"]
let myObj={
    name :"Pramila",
    age: 22,
}

 const myFunction= function(){
    console.log("Hello World");
    
 }

 console.log(typeof heroes); // object
 
 