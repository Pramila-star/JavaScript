/* const coding = ['js', 'ruby', 'python', 'java', 'cpp']

// forEach doesn't return any values
const values = coding.forEach( (item) => {
  console.log(item);
  return item
})

console.log(values);
 */

const myNums = [1,2,3,4, 5, 6, 7, 8, 9 ,10]

// filter returns the values
/* const newNums = myNums.filter( (num)=> num > 4 )
console.log(newNums); */


// when you start a score i.e {} than you have to write return statemnet in filter
/* const newNums = myNums.filter( (num) => {
    return num > 4 // if we don't write return in this than it will return you an empty array in place of values in it
})
console.log(newNums); */

// if we want to write it using forEach loop
const newNums = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);
