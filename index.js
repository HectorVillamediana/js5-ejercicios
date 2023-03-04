
// EJERCICIOS

//==========================1===========================

//1 
let arr1 = [];
//2
let arr2 = [1,2,3,4,5];
//3 
console.log(arr2.length -1);
//4
console.log(arr2.slice(-1), arr2[2], arr2[0]);
//5 
let mixedDataTypes = [1,"hola",3,4, "como", 5, 6];
console.log(mixedDataTypes.length);
//6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//7
console.log(itCompanies);
//8
console.log("Tienes: ", itCompanies.length, "empresas en tu array");
//9
console.log(itCompanies[6], itCompanies[2], itCompanies[0]);
//10
console.log(itCompanies[0], itCompanies[1], itCompanies[2],itCompanies[3], itCompanies[4], itCompanies[5],itCompanies[6]);
//11
/*console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());*/
console.log(itCompanies.toString(",").toLocaleUpperCase().split(","));
//12
console.log(itCompanies.join(", "), "son grandes empresas");
//13
let exist = "Google";
itCompanies.includes(exist) ?
    console.log(exist, "existe en el array"):
    console.log(exist, "no existe en el array");
//14
let filter = itCompanies.toString();
console.log(filter.match(/([A-Za-z]{1,6})?(o.?o)([A-Za-z]{1,6})?/g));

//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse());
//17
let cutFirst = itCompanies.slice(0,3)
console.log(cutFirst);
//18;
console.log(itCompanies.slice(4,7));
//19
console.log(itCompanies.slice(1,6));
//20
itCompanies.shift()
console.log(itCompanies);
//21 
itCompanies.pop()
console.log(itCompanies);
//22 
itCompanies.splice(1,3)
console.log(itCompanies);
//23
itCompanies.splice(0,2)
console.log(itCompanies);

//===========================2============================
//1 EN MAIN.JS

//2 
let text =
"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.replace(/[,\.]/g, "").split(" ").length);
//3 
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat")
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);

let alergia = true; 
alergia = true ? 
    shoppingCart.splice(4,1): 
    console.log(shoppingCart);
console.log(shoppingCart);

//4 EN MAIN.JS 

//5 EN MAIN JS

//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


//======================3===========================

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log("Edad minima", ages[0], "edad maxima", ages[ages.length-1]);
console.log("Edad media:", ages[ages.length/2] /2);
let promedio = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/10
console.log("La edad promedio es: ", Math.round(promedio));
let rangoEdades = ages[ages.length-1] - ages[0]; 
console.log("El rango de edades es: ", rangoEdades);

console.log(Math.abs(ages[0] - promedio));
console.log(Math.abs(ages[ages.length-1] - promedio));

//2 EN MAIN JS
//3 EN MAIN JS 