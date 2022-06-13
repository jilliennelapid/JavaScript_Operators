console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 (Arithmetic Operators: Numbers)
console.log("EXERCISE 1:\n==========\n");
// YOUR CODE HERE
let a = 20;
let b = 4;
let add = (a+b);
let minus = (a-b);
let multiply = (a*b);
let dividing = (a/b);

console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2 (Arithmetic Operators and Concatenation)
console.log("EXERCISE 2:\n==========\n");
// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

//What is the value of:
  //num + str
  let answer1 = (num + str);
  console.log(answer1)

  //num + str2
  let answer2 = (num + str2);
  console.log(answer2)

  //num + isPresent
  let answer3 = (num + isPresent)
  console.log(answer3)

  //firstName + num
  let answer4 = (firstName + num)
  console.log(answer4)

  //isPresent + str
  let answer5 = (isPresent + str)
  console.log(answer5)

  //firstName + lastName
  let answer6 = (firstName + lastName)
  console.log(answer6)


// Exercise 3 (Comparison Operators)
console.log("EXERCISE 3:\n==========\n");
// YOUR CODE HERE
let val = 5;
var str3 = "5";
var str4 = "five";
var isPresent2 = false;

//What is the value of:
  //val == str3
  let answer7 = (val == str3);
  console.log(answer7);

  //val === str3
  let answer8 = (val === str3);
  console.log(answer8);

  //!isPresent2
  let answer9 = (!isPresent2);
  console.log(answer9);

  //("eleven" == str4 && val >= str3)
  let answer10 = ("eleven" == str4 && val >= str3);
  console.log(answer10);

  //(!isPresent2 || isPresent2)
  let answer11 = (!isPresent2 || isPresent2)
  console.log(answer11);

  //0 == false
  let answer12 = (0 == false);
  console.log(answer12);

  //0 === false
  let answer13 = (0 === false);
  console.log(answer13);

  //0 != false
  let answer14 = (0 != false);
  console.log(answer14);

  //0 !== false
  let answer15 = (0 !== false);
  console.log(answer15);