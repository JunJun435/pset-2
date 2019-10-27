const scanner=require("readline-sync");
const students=Number(scanner.question("\nStudents: "));
const teachers=Number(scanner.question("Teachers: "));
const busCap=Number(scanner.question("Bus capacity: "));
const passengers=students+teachers;
const lastBus=passengers%busCap;
const numberofBuses=((passengers/busCap - lastBus/busCap)+1).toLocaleString('en',{
  style:"decimal", maximumFractionDigits:2
});
console.log("\n" + numberOfBuses + " bus(es) is (are) needed, with " + lastBus + " passenger(s) on the last bus.");
