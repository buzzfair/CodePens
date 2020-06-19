// Write a function that takes in an array of years and using .sort() returns that array with the years sorted in descending order
const sortYears = arr => {
 return arr.sort((a, b) => b - a);
};


// Alternative shorthand version of this function
// const sortYears = arr => arr.sort((a, b) => b - a);



// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
const differentYears = [1114, 1291, 1477, 1380, 780, 35, 1978, 2020]

console.log(sortYears(years))
console.log(sortYears(differentYears))
// Output: [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
// [ 2020, 1978, 1477, 1380, 1291, 1114, 780, 35 ]