// Question 1

const ages = [3,9,23,64,2,8,28,93]; // created array ages
if (ages == [0], ages == [7]) { // condition set to subtract index[o] from the last index
}
console.log(ages[0] - ages[7]);    

ages.push(15); // added value 15 to ages array
console.log(ages);

if (ages == [0], ages == [7]) { // // condition set to subtract index[o] from the last index
console.log(ages[0] - ages[7]);
} 

// Question 2

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // created array called names
let i; // declared variable i

do { // attempted do while loop to iterate through names array to calculate the average number of letters per name 
  names.reduce(); // reduce method to go back over the names array and combine the elements into a single value
while (i = 0, i <= names.length, i++){ 
  result (i / names.reduce()); // result to print to output
}
}

// Question 3

// names.length-1; 
//  access the last element of an array by using the length property

// Question 4

// names[0]
// access the first element of an array by referring to index [0]

// Question 5

let nameLengths = [3, 5, 3, 5, 4, 3]; // Created new array called nameLengths based off of names array

  for (let i = 0, i <= nameLengths.length-1, i++) { // attempted for loop to iterate over names array and nameLengths array
    if (let i = 0; i <= names.length-1; i++ ) { // condition to add the length of each name to nameLengths array
    }
  }

// Question 6

let sum; // declared variable sum

const nameLengths = [3, 5, 3, 5, 4, 3]; // nameLengths array repeated for new loop
for(let i = 0; i <= nameLengths.length-1; i++) { // attemted to create effective for loop
  sum = i + nameLengths[i]; // results in adding the index to the value held within each index EX: [0] holds value 3 
}

// Question 7

let word = "HI"; // declared and set value for parameter word
let n = 4; // declared and set value for parameter n

function wordMultipiedByN(word,n) { // created function
    return $(word * n) ; // attemtedd to concatenate both parameters to achieve desired output "HIHIHIHI"
}  
// output is undefined

// Question 8

var a = 'Sam'; // parameter1
var b = 'Johnson'; // parameter2

function fullName(firstName, lastName) { // created function fullName
return a + " " + b; // return from function
}
console.log(fullName(result)); // output: Sam Johnson

// Question 9

var arr1 = [12,7,19,24,11,8]; // created array

function anyFunction(arr1) { // created function and inserted parameter  
  for (var i = 0, sum = i < arr1.length) { // attemted loop to find sum of elements in arr1
 arr1[i++];
    result = i == sum;
  
  if (sum > 100) { // if sum is greater than 100, return should be true
    return true;
  }
}

// Question 10

const arr2 = [1,2,3,4,5,7]; // created an array
let i; // declared variable i

function otherFunction(arr2) { // created function that takes arr2
  if (i = 0, i <= a.length, i++){ // created loop to find the aaverage of arr2 
    a === arr2
  }
    return (a[i] / a.length) * a
}
 // output is undefined

// Question 11

let f = [1, 2, 3]; // declared first array
let s = [4, 5, 6]; //declared second array
let sum = 0; // declared variable sum

function thisFunction(f, s) { // created function thisFunction
  if(let i = 0; i <= f[i]; sum =+ f[i++]) { // for loop to find the average of first array
    if(let i = 0; i <= s[i]; sum =+ s[i++]) { // for loop to find the average of second array
      if(sum += f[i++] > sum += s[i++]) { // if statement to return true if the average of the first array is greater than the second array
        return true;
      }
    }
  }
}

// Question 12

let isHotOutside = true; // declared variable isHotOutside with given value true
let moneyInPocket = 15.19; // declared variable isHotOutside with given value 15.19

function willBuyDrink(isHotOutside, moneyInPocket) { // created function willBuyDrink that holds 2 parameters isHotOutside and isHotOutside
  if (moneyInPocket <= 10.50 && isHotOutside == true) { // if statement with the conditions needed for return to be true
  }
  return true;
}
return true;
// output is true

// Question 13

let sleepy = num; // declared parameter for function amITired
let answ1 = "Yes, I am tired"; // declared variable with string response 
let answ2 = "Soon I will be tired";// declared variable with string response 
let answ3 = "No, I am not tired";// declared variable with string response 
let answ4 = "error";// declared variable with string response 

function amITried() { // created function amITired 
  if(sleepy >= 7 && sleepy <= 10) { // conditions to output response from answ1
    return answ1;
  } else if(sleepy <=6 && sleepy >= 4) { // conditions to output response from answ2
    return answ2;
  } else if(sleepy <= 3 && sleepy >=0) { // conditions to output response from answ3
    return answ3;
  } else { // conditions to output response from answ4
    return answ4;
  }
  return;
  }
  // output depends on input