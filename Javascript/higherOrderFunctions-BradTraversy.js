const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//.filter method
//ages 21 & over
const canDrink = ages.filter(function(age) {
	if (age >= 21) {
		return true;
	} 
});

//same as above, shorthand with arrow function
const canDrink = ages.filter(age => age >= 21);

//filter out retail category companies
const retailCompanies = companies.filter(function(company) {
	if (company.category === 'Retail') {
		return true;
	}
});

//same as above, shorthand
const retailCompanies = companies.filter(company => company === 'Retail');
console.log(retailCompanies);

//80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

//companies that lasted 10+ years
const lastTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastTenYears);

//.map
//company name array
const companyNames = companies.map(function(company){
	return company.name;
});
console.log(companyNames);

//same as above, shorthand
const companyStartEnd = companies.map(function(company) {
	return `${company.name} [${company.start} - ${company.end}]`
});
console.log(companyStartEnd);

//same as above, shorthand
const companyStartEnd = companies.map(company => `${company.name} [${company.start} - ${company.end}`);
console.log(companyStartEnd);

//ages square root
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

//ages times two
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

//combine both maps from above
const agesBothMaps = ages
	.map(age => Math.sqrt(age));
	.map(age => age * 2);
console.log(agesBothMaps);

//.sort method
//sort companies by start year
const sortedCompanies = companies.sort(function(company1,company2) {
	if (company1.start > company2.start) {
		return 1;
	} else {
		return -1;
	}
});
console.log(sortedCompanies);

//same as above, shorthand using arrow function and ternary function
const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);

//sort ages
const sortAges = ages.sort(a, b => a - b);
console.log(sortAges);

//.reduce
//add all ages together, starting old-school w/ a classic for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log(ageSum);

//same as above, using .reduce
const ageSum - ages.reduce(function(total, age) {
	return total + age;
}, 0);
console.log(ageSum);

//same as above, using arrow function
const ageSum = ages.reduce((total,age) => total + age, 0);
console.log(ageSum);

//total years for all companies
const totalYears = companies.reduce(function(company,total) {
	return total + (company.end - company.start)
}, 0);
console.log(totalYears);

//same as above using arrow function
const totalYears - companies.reduce(company,total => total + (company.end - company.start), 0);
console.log(totalYears);

//can use these methods all together
//combined methods example
const combined = ages
	.map(age => age * 2); //multiplies ages times 2
	.filter(age => age >= 40); //filters out ages under 40
	.sort((a,b) => a - b); //sorts ages from largest to smallest
	.reduce((a,b) => a + b, 0); //adds them all together
console.log(combined);