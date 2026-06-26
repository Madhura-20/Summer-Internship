let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 49;
let num5 = 60;

let average=(num1+num2+num3+num4+num5)/5;
console.log("Average=",average);


/*Area and perimeter of a circle*/
let radius = 7;

let area = 3.14 * radius * radius;
let perimeter = 2 * 3.14 * radius;

console.log("Area =", area);
console.log("Perimeter =", perimeter);


/*Convert min into hours and minutes*/
let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log("Hours =", hours);
console.log("Minutes =", remainingMinutes);

/*Calculate the Total Marks and Percentage of 5 Subjects*/
let sub1 = 80;
let sub2 = 75;
let sub3 = 90;
let sub4 = 85;
let sub5 = 70;

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = (total / 500) * 100;

console.log("Total Marks =", total);
console.log("Percentage =", percentage + "%");


/*Check Whether a Number is Positive, Negative, or Zero*/
let num = -5;

if (num > 0) {
    console.log("Positive Number");
}
else if (num < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}