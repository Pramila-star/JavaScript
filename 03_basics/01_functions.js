//function addTwoNumbers(number1, number2){
//      console.log(number1 +number2);
//}

//addTwoNumbers(3, 7)

function addTwoNumbers(number1, number2){

    let result = number1+ number2
    return result
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username){
    return '${username} just logged in'
}
// console.log(loginUserMessage("Pramila"));

function calaculateCartPrice(...num1){
    return num1
}

//console.log(calaculateCartPrice(200, 400, 500));

const user = {
    username:"Pramila",
    price: 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

handleObject(user);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,400,500,600]));

