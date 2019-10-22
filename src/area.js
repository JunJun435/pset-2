const scanner=require("readline-sync");
const width=scanner.question("Width: ");
const length=scanner.question("Length: ");
const areaInMilli= (width * 25.4) * (length * 25.4);
rounded_number = areaInMilli.toFixed(2);
console.log("A(n)" + width + ("-by-") + length + ("-inch sheet of paper has a area of") + areaInMilli + ("square millimeters(s).")
