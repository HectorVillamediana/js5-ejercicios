//1
import { countries } from "./arrays/countries.js";
import { web_techs } from "./web_techs.js"

//4
console.log(countries.indexOf('Ethiopia'));

countries.includes('Ethiopia') ?
    console.log(countries[57].toLocaleUpperCase()):
    console.log("El pais no existe");
5//
console.log(web_techs.indexOf('Sass'));
web_techs.includes('Sass') ?
    console.log("Sass es un proceso de css"):
    web_techs.push("Sass");
console.log(web_techs);


//================3=========================

//2 
console.log(countries.slice(0,9));

//3
console.log((countries.length/2));
console.log(countries.length);
console.log(countries[96]);
let countries_ = countries.splice(97,96);
let _countries = countries.splice(0,97);
console.log(_countries);
console.log(countries_);
_countries.length !== countries_.length ?
    countries_.push("FlipsLandia"):
    console.log(countries_);
console.log(countries_);