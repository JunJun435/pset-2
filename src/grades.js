const scanner=require("readline-sync");
console.log("\nEnter three homework grades.");
const h1=Number(scanner.question());
const h2=Number(scanner.question());
const h3=Number(scanner.question());
const hweight=((h1 + h2 + h3)*.15)/3;
console.log("\nEnter three quize grades.");
const q1=Number(scanner.question());
const q2=Number(scanner.question());
const q3=Number(scanner.question());
const qweight=((q1 + q2 + q3)*.35)/3;
console.log("\nEnter three test grades.");
const t1=Number(scanner.question());
const t2=Number(scanner.question());
const t3=Number(scanner.question());
const tweight=((t1 + t2 + t3)*.5)/3;
const grade=((hweight + qweight + tweight)/100).toLocaleString('en',{
   style:'percent',maximumFractionDigits: 2, minimumFractionDigits: 2
})
console.log("\nYour marking period grade is " + grade +"." );
