// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // date is an object type

//let myCreatedDate = new Date(2023 , 0 , 23)
//let myCreatedDate = new Date("2023-01-14") // this is also a syntax to pass argumnet in date
let myCreatedDate = new Date("03-29-2026") //  this is also used
console.log(myCreatedDate.toDateString()); // in javaScript month start from 0
console.log(myCreatedDate.toLocaleString()); // in locale month start from 1

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

new Date.toLocaleString('default', {weekdy:"long",
})







