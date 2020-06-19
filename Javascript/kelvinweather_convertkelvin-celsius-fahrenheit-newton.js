// starting variable will be today's forecast in degrees Kelvin
const kelvin = 293;
// var celsius is kelvin minus 273
let celsius = kelvin - 273;
// var fahrenheit will be celsius * (9/5) +32
let fahrenheit = celsius * (9 / 5) + 32;
//round farenheit to eliminate decimal, show as whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//var newton will be celsium * (33/100)
let newton = celsius * (33 / 100);
//round newton to eliminate decimal, show as whole number
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`)
console.log(`The temperature is ${celsius} degrees Celsius`)
console.log(`The temperature is ${kelvin} degrees Kelvin`)