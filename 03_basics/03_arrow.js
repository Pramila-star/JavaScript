const user = {
    username: "Priyanka",
    price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username} , welcome to website`);
       // console.log(this); // this tell about the current context
        
    }

}
//user.welcomeMessage()
//user.username = "Rudra"
//user.welcomeMessage()

//console.log(this);

function chai() {
    let username = "Priyanka"
   // console.log(this.username);
    
}
//chai()

//const chai =  () => {  // this is syntex to write arrow function
   let username = "hitesh"
  // console.log(this.username);
   
//}

//chai()

// ARROW FUNCTIONS

// basic arrow function

//const addtwo = (num1, num2) => {
//    return num1 + num2
//}
//console.log(addtwo(3, 4))

// implicit return arrow function

//const addtwo = (num1, num2) =>  num1 + num2
//const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({username: "Priyanka"}) // in this way we can return the object

console.log(addtwo(3,4));


// if we wrap the arrow function in the currly bracket {} than we have to write a return function  but if we wrap arrow function in paranthesis () than we donot need to write the return function


const myArray = [2,  4, 6 ,7 , 8]

myArray.forEach(() => {}) // arrow function to write loop