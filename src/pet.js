const MAXIMUM_FITNESS = 10;
const FITNESS_INCREASE = 4;
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (this.fitness + FITNESS_INCREASE <= MAXIMUM_FITNESS) {
    this.fitness += FITNESS_INCREASE;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (this.hunger - 3 >= 0) {
    this.hunger -= 3;
  } else {
    this.hunger = 0;
  }
};

module.exports = Pet;
