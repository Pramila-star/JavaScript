let name = "Pari"
let repoCount= 50

//console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

console.log(name[0]);
console.log(name.__proto__);

const gameName = new String("Pramila-pr")

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Pramila   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim removes all the extra spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh')); // to know whether it included in the swtring or not

console.log(gameName.split('-')); // split the string on the basis of given argument







