// Write a function, dogFactory(), with 3 parameters, return an object returned with the values of the arguments passed in
const dogFactory = (name,breed,weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
  get name () {
    return this._name;
  },
  // add getters and setters for propertie and change propNames to have an underscore prepend
  get breed () {
    return this._breed;
  },
  get weight () {
    return this._weight;
  },
  set name(newName) {
    this._name = newName;
  },
  set breed(newBreed) {
    this._breed = newBreed;
  },
  set weight(newWeight) {
    this._weight = newWeight;
  },
  // add 2 methods, as below
  bark() {
    return 'ruff! ruff!';
  },
  eatTooManyTreats () {
    this._weight++;
  }
}
};