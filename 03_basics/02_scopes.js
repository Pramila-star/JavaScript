//var c = 300
let a = 300
if (true) {
   let a = 10
   const b = 20
    //c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Sanjeev"

    function two() {
        const website ="Brave"
        console.log(username);
        
    }
   // console.log(website);
    two()
}

//one()

if (true) {
    const username = "Sanjeev"
    if (username === "Sanjeev") {
        const website = " Brave"
      //  console.log(username + website);
        
    }
  //  console.log(website); // error
    
}
//console.log(username);// error


//**************************interesting   ************************/
console.log(addone(5))
function addone(num) {
    return num + 1
}


const addtwo = function(num) {
    return num + 2
}
addtwo(5)