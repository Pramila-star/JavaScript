// REDUCE METHOD =>  array.reduce()

const myNums = [1, 2, 3, 4]

// reduce in function
/* const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0) */


// reduce in arrow function
const myTotal = myNums.reduce( (acc, curr)=> acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay);
