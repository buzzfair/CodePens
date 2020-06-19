// Write your function here:

const howOld = (age,year) => {
    const currentYear = new Date().getFullYear();
    const yearDifference = year - currentYear;
    const newAge = age + yearDifference;
    if (year > currentYear) {
      return `You will be ${newAge} in the year ${year}`;
    } else if (year < currentYear && newAge >= 0) {
      return `You were ${newAge} in the year ${year}`;
    } else {
      return `The year ${year} was ${-newAge} years before you were born`;
    }
  }
  
  console.log(howOld(78,1970));
  
  