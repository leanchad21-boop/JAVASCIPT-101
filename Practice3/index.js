//ARITHMETHIC OPERATORS 

//operands (values/variables)
//operators (+ - * /)
//"**" does "to the power of ___"
//"%" modulo gets the remainder of the value

let Addstudents = 30;
Addstudents = Addstudents + 1;

let Minusstudents = 30;
Minusstudents = Minusstudents - 1;

let Multiplystudents = 30;
Multiplystudents = Multiplystudents * 2;

let Dividestudents = 30;
Dividestudents = Dividestudents / 2;

let Powerstudents = 30;
Powerstudents = Powerstudents ** 2

let Modulostudents = 30;
Modulostudents = Modulostudents % 2;

console.log(`The Sum of 30 and 1 is : ${Addstudents}`);
console.log(`The Differrence of 30 and 1 is : ${Minusstudents}`);
console.log(`The Product of 30 and 2 is : ${Multiplystudents}`);
console.log(`The Quotient of 30 and 2 is : ${Dividestudents}`);
console.log(`The Power of 2 of 30 is : ${Powerstudents}`);
console.log(`The Modulo of 30 is : ${Modulostudents}`);

//AUGMENTED ASSIGNMENT OPERATORS
let students1 = 30;
let students2 = 30;
let students3 = 30;
let students4 = 30;
let students5 = 30;
let students6 = 30;

students1 +=1;
students2 -=1;
students3 *=2;
students4 /=2;
students5 **=2;
students6 %=2;

console.log(students1);
console.log(students2);
console.log(students3);
console.log(students4);
console.log(students5);
console.log(students6);

//INCREMENTATION

let inc1students = 30;
let inc2students = 30;

inc1students++;
inc2students--;

console.log(inc1students);
console.log(inc2students);

/* OPERATOR PRECEDENCE
    1. PARENTHESIS ()
    2. EXPONENTS
    3. MULTIPLICATION
    4. ADDITION & SUBTRACTION
*/

let result = 1 - (2 * 3) + 4 ** 2 / 2;

console.log(result);