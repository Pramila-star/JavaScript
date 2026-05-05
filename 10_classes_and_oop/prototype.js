/* let myNme = "Pramila    ";
let mychannel = "chai       ";

console.log(myName.trueLength());
 */

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Pramila = function(){
    console.log(`Pramila is present in all objects`);
    
}

Array.prototype.heyPramila = function(){
    console.log(`Pramila says hello`);
    
}

//heroPower.Pramila()
myHeros.Pramila()
myHeros.heyPramila()
//heroPower.heyPramila()

// inheritance

const User= {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

//modern syntex

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Pramila".trueLength()
"iceTea".trueLength()
