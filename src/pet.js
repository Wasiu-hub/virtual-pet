const MAXIMUM_FITNESS = 10;
const FITNESS_INCREASE = 4;
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = MAXIMUM_FITNESS;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }

  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }

  if (this.fitness + FITNESS_INCREASE <= MAXIMUM_FITNESS) {
    this.fitness += FITNESS_INCREASE;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  }

  if (this.hunger - 3 >= 0) {
    this.hunger -= 3;
  } else {
    this.hunger = 0;
  }
};

Pet.prototype.checkUp = function () {
  if (this.isAlive) {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else {
      return "I feel great!";
    }
  } else {
    return "'Your pet is no longer alive :('";
  }
};

Pet.prototype.adoptChild = function (child) {
  return this.children.push(child);
};

Pet.prototype.haveBaby = function (childName) {
  const child = new Pet(childName);
  return this.children.push(child);
};

module.exports = Pet;
