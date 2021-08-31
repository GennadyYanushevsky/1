"use strict";

let checkVehicle = function(wheels, weight) {
if (wheels === 2 && weight < 100){
return "Парковка разрешена";
}
 else {
return "Вам здесь не место";
}
 
};

console.log(checkVehicle(1, 150));



let calculatePressure = function(density, depth) {
return Math.round (density * 9.8 * depth);
}
console.log(calculatePressure(8.5, 100));



let age = 1;
let ageGroup;

if (age <= 1 ) {
    ageGroup = "Котята";
} else if(age > 1 && age <= 3) {
    ageGroup = "Молодые коты";
} else if(age > 3 && age <= 7) {
    ageGroup = "Коты средних лет";
} else {
    ageGroup = "Почтенные коты";
};
console.log(ageGroup);