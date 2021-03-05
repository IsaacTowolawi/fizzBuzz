// LOOPS

//for (let i = 0; i < 10; i++) {
    //console.log(i)
  //}
  
  //for (let i = 10; i >= 0; i--) {
    //console.log(i)
  //}

  //^ -- From Bhavik Sheth -- SugarySeagreenSorting -- https://repl.it/@bhaviksheth/SugarySeagreenSorting#index.js -- ^


  //function fizzBuzz(num1, num2) { 

    //if (num1 % num2 == 0) { 
     //return true; 
     //} else 
    //{ return false; } 
    //};

    //Functions implemented a thought in the first milestone is incorrect.I'm pretty sure you wanted 
    //us to print out through 1 to 10 with the appropriate inputs of Fizz and Buzz .
    
    
for (let i = 1; i <= 15; i++) { 
    let out = ''; 
    if (i % 3 === 0) out += 'Fizz'; 
    if (i % 5 === 0) out += 'Buzz'; 
    console.log(out || i); 
}

//On the second milestone, which was very much successful due to help online I was able to establish a range from 
//1 to 15 with a if else statement for fizz and buzz which prints out the numbers through 1 to 15 marking "Fizz" and "Buzz" appropriately.





    