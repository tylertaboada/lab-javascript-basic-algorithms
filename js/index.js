console.log("I'm ready!");

// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.

const hacker1 = 'Koa';

// 1.2 Print `"The driver's name is XXXX"`.

console.log('The drivers name is ' + hacker1);

// 1.3 Create a variable `hacker2` with the navigator's name.

const hacker2 = 'Plum';

// 1.4 Print `"The navigator's name is YYYY"`.

console.log('The navigators name is ' + hacker2);

// 2.1. Depending on which name is longer, print:

// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names,  ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverSpace = [];

for (let a = 0; a < hacker1.length; a++) {
  driverSpace.push(hacker1[a]);
}
console.log(hacker1.toUpperCase().split('').join(' '));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navReverse = [];

for (let x = hacker2.length; x >= 0; x--) {
  navReverse.push(hacker2[x]);
}
console.log(navReverse.join(''));

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */
