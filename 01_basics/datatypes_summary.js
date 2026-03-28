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
 
 // ***************************************

 // memory = 2 Types
  // Stack (Primitive) , Heap (Non- Primitive)

  let myName = "PramilaRai"

  let anothername = myName
  anothername = "PariRai"

  console.log(myName);
  console.log(anothername);
  
  let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
  }
    let user2 = user1

    user2.email = "pramila2google.com"

    console.log(user1.email);
    console.log(user2.email);
    
    