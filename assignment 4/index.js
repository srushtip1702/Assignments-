
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("");

console.log("-- First number > 10 divisible by 6 --");

let number = 11;

while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log(`Found: ${number}`);
        break;
    }
    number++;
}

console.log("");

console.log("-- Numbers from 1 to 10, skipping multiples of 3 --");

let count = 0;

do {
    count++;

    if (count % 3 === 0) {
        continue;
    }

    console.log(count);
} while (count < 10);
