// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();

function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
//   console.log(loc);


// Setup
// let outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  outerWear = "Hoodie";

  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);



// Setup
let sum = 0;

function addThree(num) {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
console.log(sum);




// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    } else if (a == 2 || b == 2) {
      return 8;
    } else if (a == 2 || b == 8) {
      return 18;
    } else if (a == 3 || b == 3) {
      return 12;
    } else if (a == 0 || b == 0) {
      return 0;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
  abTest(-2,2);
  abTest(2,-2);
  abTest(2, 8);
  abTest(3,3);
  abTest(0,0);


  
const myArray = [];

for (i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);

