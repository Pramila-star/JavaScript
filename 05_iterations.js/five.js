const coding = ['js', 'ruby', 'python', 'java', 'cpp']

/* coding.forEach( function (item) { // in forEach loop there is no name of the function
  console.log(item);
  
}) */

  /* coding.forEach( (item) => {
    console.log(item);
  } )// arrow function for forEcah loop

  function printMe(item){
    console.log(item);
    
  }

  coding.forEach(printMe) */

 /*  coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
    
  }) */

    const myCoding = [
      {
        languageName : "javascript",
        languageFileName: "js"
      },
      {
        languageName : "java",
        languageFileName: "java"
      },
      {
        languageName : "python",
        languageFileName: "py"
      }
    ]

    myCoding.forEach( (item) => {
      console.log(item.languageName); // how to access the objects in an  array using forEach loop
      
    })