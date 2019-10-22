const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
let areaInMilli= (width*25.4) * (length*25.4);
finalArea=areaInMilli.toLocaleString('en');
Math.round(finalArea*100)/100;
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a area of " + finalArea + " square millimeters(s).");
