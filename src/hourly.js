const scanner=require("readline-sync");
const hourlyWage=Number(scanner.question("\nHourly wage: "));
const m=Number(scanner.question("\nMonday: "));
const t=Number(scanner.question("Tuesday: "));
const w=Number(scanner.question("Wednesday: "));
const th=Number(scanner.question("Thursday: "));
const f=Number(scanner.question("Friday: "));
const s=Number(scanner.question("Saturday: "));
const su=Number(scanner.question("Sunday: "));
let wage=(m*hourlyWage) + (t*hourlyWage) + (w*hourlyWage) + (th*hourlyWage) + (f*hourlyWage) + (s*hourlyWage) + (su*hourlyWage);
total=wage.toLocaleString('en',{ style:'currency', currency: 'USD'})
console.log("\nYou'll make " + total + " this week.");
