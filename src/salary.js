const scanner=require("readline-sync");
let annualSalary=Number(scanner.question("\nAnnual salary: "));
const kcontribution=annualSalary*.07;
annualSalary=yearlySalary-kcontribution;
const federalTax=annualSalary*.157;
const stateTax=annualSalary*.0447;
const socialSecTax=annualSalary*.062;
const medicareTax=annualSalary*.0145;
const tax=federalTax+stateTax+socialSecTax+medicareTax;
const finalSalary=annualSalary-tax;
const takeHomePay=(finalSalary/24).toLocaleString('en',{
  style:'currency', currency:'USD'
});
console.log("\nYour take-home pay each check will be " + takeHomePay + ".");
