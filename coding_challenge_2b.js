console.log("Hello, Tech Coder babies");
console.log("This is coding challenge 2B");

let itemName = "Harry Potter Magic Wand";
let unitCost = 29.99;
let currentStock = 199;
let reorderLevel = 100;
let targetStock = 300;
let weeklyDemand = 99;
let supplierLeadTimeWeeks = 3;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item Name:", itemName);
console.log("Weeks of cover:", weeksOfCover.toFixed(2));
console.log(reorderNow ? "Reorder needed." : "No reorder needed.");
console.log("Recommended reorder quantity:", reorderQuantity);
console.log("Estimated reorder cost: $", estimatedReorderCost.toFixed(2));
console.log("Estimated Cost: $", estimatedReorderCost.toFixed(2));
