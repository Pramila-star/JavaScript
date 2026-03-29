const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // fix the decimal value upto given parameter eg: 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //range between 1-21 it will returns a string or it will provide a roundoff value

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // it willput comma in between zeroes in US standard
//en-In covert the value in indian standards.
 
 //*************************MATHS  ************************/

 console.log(Math);
 console.log(Math.abs(-4));// only the negative values become postive but positive have no change in it
 console.log(Math.round(4.3));// round of value
 console.log(Math.ceil(4.2)); // take round off to the highest value eg: 4 in this case
  console.log(Math.floor(4.9));// take round off to the lowest value eg: 4 in this case because 4 is the smallest value in it
  console.log(Math.min(4,2,6,7));
  console.log(Math.max(4,2,6,7));
  console.log(Math.random()); // it will give value between 0-1
  console.log((Math.random()*10) + 1); // by multiply it by 10 we shift the point and to avoid the number as zero we add it by 1
  console.log(Math.floor(Math.random()*10) + 1);// min value

  const min =10
  const max = 20

  console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula
           
 
 
 
 