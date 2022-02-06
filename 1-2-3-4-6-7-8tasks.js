///////TASK 1    10 points
let str = prompt("What is your name?");

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

alert("Hello, " + toTitleCase(str) + "!");






////////TASK 2 5 points
function main() {
  repeat(4) {
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
  }
  f();
  repeat(4) {
    move();
    move();
    putBeeper();
    turnRight();
  }
  move();
  turnRight();
  move();
  putBeeper();
}

function f() {
  move();
  turnLeft();
  move();
}







////////TASK 3     5 points
function main() {
  turnLeft();
  repeat(4) {
    move();
  }
  rMove();
  lMove();
  rMove();
  move();
  rMove();
  Repeat();
  lMove();
  move();
  Repeat();
  lMove();
  move();
  lMove();
  rMove();
  move();
  rMove();
  lMove();
  pickBeeper();
}

function rMove() {
  turnRight();
  move();
}

function lMove() {
  turnLeft();
  move();
}

function Repeat() {
  rMove();
  lMove();
  rMove();
  lMove();
}



////////TASK 4 10 points
alert("Hello! Let's calculate something!");
alert("We're gonna calculate how many days, weeks and months you have left, until you become 90 years old!");
let ans = prompt("Let's start?");
if (ans == 1 || ans >= 1 || ans == "yes" || ans == "Yes" || ans == "yeap" || ans == "yeah") {
  let age = prompt("Enter your age: ");
  if (age <= 0) {
    alert("error404");
  }
  let days = (90 - age) * 365;
  let weeks = (90 - age) * 52;
  let months = (90 - age) * 12;

  function YearsLeft() {}
  YearsLeft(age);
  alert("You have : " + days + " days, " + weeks + " weeks, " + months + " months, until you become 90 y.o!");
  alert("Thank you! Good Bye!");
  alert("Remember to be happy, and spend your time with people who make you smile!");
  alert("You have only 1 Life! ^-^ ");
} else {
  alert("Very sad! Ok, bye bye!");
}




////////TASK 6   20 points

const year = prompt('Please, enter the year: ');

function LeapYear(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' year is a leap year!');
  } else {
    console.log(year + ' year is not a leap year :( ');
  }
}
LeapYear(year);




////////TASK 7           20 points
function RandomName(names) {
  return names[Math.floor(Math.random() * items.length)];
}
var names = ["Malika", "Alina", "James", "John", "Marie", "Anne", "George", "Liam", "Aruzhan", "Ginny", "Charles", "Leona", "Finn", "Lewis"];
console.log(RandomName(names), "will bye everyone food!");





////////TASK 8    20 points
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
const nTerms = prompt('Enter the number of terms: ');
if (nTerms <= 0) {
  console.log('Enter a positive integer.');
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
