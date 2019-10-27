const length=48;
const width=24;
const diameter=6;
const holeArea=(diameter/2)**2 * Math.PI;
const area=length*width;
const surfaceArea=(area - holeArea).toLocaleString('en',{
  style:"decimal", maximumFractionDigits:2
});
console.log("\nThe surface area of a standard Cornhole board is " + surfaceArea + " square inch(es).")
