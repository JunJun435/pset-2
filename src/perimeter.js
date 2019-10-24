const scanner=require("readline-sync");
const width=scanner.question("\nWidth: ");
const length=scanner.question("Length: ");
let perimeterInCenti= ((width*2.54)*2) + ((length*2.54)*2);
finalPerimeter=perimeterInCenti.toLocaleString('en');
Math.round(finalPerimeter*100)/100;
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + finalPerimeter + " centimeter(s).");
