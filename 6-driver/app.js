let hasLicense = true;
let age = 18;
let isDrunk = false;
let isDriving = hasLicense && age >= 18 && !isDrunk ? "Может" : "Не может";
console.log(isDriving);
