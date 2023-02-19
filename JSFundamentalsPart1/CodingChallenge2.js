Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � */

const marksWeight1 = 78;
const marksHeight1 = 1.69;
const johnsWeight1 = 92;
const johnsHeight1 = 1.95;

const marksBMI = (marksWeight1 / (marksHeight1 * marksHeight1));
const johnsBMI = (johnsWeight1 / (johnsHeight1 * johnsHeight1));

let markHigherBMI = (marksBMI > johnsBMI)
console.log(marksBMI, johnsBMI)
console.log(markHigherBMI)
if (marksBMI > johnsBMI) {
  console.log(`Mark's(${marksBMI}) BMI is higher than John's!(${johnsBMI})`);
} else {
  console.log(`John's(${johnsBMI}) BMI is higher than Mark's!(${marksBMI})`);
}
