//Meal Maker
//random menu generator

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._course.appetizers = appetizers;
  },
  set mains(mains) {
     this._course.mains = mains;
  },
  set desserts(desserts) {
    this._course.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName,dishName,dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    console.log('adding dish', dish);
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Olives & Manchego', 6.50);
menu.addDishToCourse('appetizers', 'Garden Salad', 5.50);
menu.addDishToCourse('appetizers', 'Sauteed Scallop', 9.50);
menu.addDishToCourse('mains', 'Roasted Chicken', 8.50);
menu.addDishToCourse('mains', 'Pasta & Mushrooms', 7.50);
menu.addDishToCourse('mains', 'Grilled Salmon', 11.50);
menu.addDishToCourse('desserts', 'Classic Chocolate Cake', 7.00);
menu.addDishToCourse('desserts', 'Trio of Homemade Ice Creams', 5.50);
menu.addDishToCourse('desserts', 'Coffee Creme Brulee', 8.50);

const meal = menu.generateRandomMeal();

console.log(meal);


// Output: adding dish {name: "Olives & Manchego", price: 6.5}
// VM26:37 adding dish {name: "Garden Salad", price: 5.5}
// VM26:37 adding dish {name: "Sauteed Scallop", price: 9.5}
// VM26:37 adding dish {name: "Roasted Chicken", price: 8.5}
// VM26:37 adding dish {name: "Pasta & Mushrooms", price: 7.5}
// VM26:37 adding dish {name: "Grilled Salmon", price: 11.5}
// VM26:37 adding dish {name: "Classic Chocolate Cake", price: 7}
// VM26:37 adding dish {name: "Trio of Homemade Ice Creams", price: 5.5}
// VM26:37 adding dish {name: "Coffee Creme Brulee", price: 8.5}
// VM26:66 Your meal is Garden Salad, Grilled Salmon, and Coffee Creme Brulee. The price is $25.5.