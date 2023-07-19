const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("constructor", () => {
  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});

describe("constructor", () => {
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});

describe("constructor", () => {
  it("has initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });
});

describe("growUp", () => {
  it("increases hunger property by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});

describe("constructor", () => {
  it("has initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("decreases the fitness property by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fido");

    // pet.fitness = 0;
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});

describe("walk", () => {
  it("increase fitness by to a maximum of 10", () => {
    const pet = new Pet("Fido");

    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("decreases hunger level by 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
});

describe("feed", () => {
  it("decreases hunger to a minimum of 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp", () => {
  it("returns 'I need a walk' if pet fitness is 3 or less", () => {
    let pet = new Pet();
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual("I need a walk");
  });
});

describe("checkUp", () => {
  it("returns 'I am hungry if hunger is 5 or more'", () => {
    pet = new Pet();
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual("I am hungry");
  });
});

describe("checkUp", () => {
  it("returns 'I am hungry AND I need a walk' if fitness is 3 or less and hunger is 5 or more ", () => {
    pet = new Pet();
    pet.fitness = 2;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });
});

describe("checkUp", () => {
  it("returns 'I feel great!' if fitness is greater than 3 and hunger is less than 4", () => {
    pet = new Pet();
    pet.fitness = 4;
    pet.hunger = 3;
    expect(pet.checkUp()).toEqual("I feel great!");
  });
});

describe("constructor", () => {
  it("returns true if the pet is alive", () => {
    const pet = new Pet("Fido");
    this.age = 29;
    this.hunger = 9;
    this.fitness = 1;
    expect(pet.isAlive).toBe(true);
  });
});

describe("constructor", () => {
  it("returns false if the pet is not alive", () => {
    const pet = new Pet("Fido");
    this.age = 30;
    this.hunger = 10;
    this.fitness = 0;
    expect(!pet.isAlive).toBe(false);
  });
});

describe("feed", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.hunger = 10;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("growUp", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.fitness = 0;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("constructor", () => {
  it("set the children property as an empty array", () => {
    const pet = new Pet("Fido");

    expect(pet.children).toEqual([]);
  });
});

// describe("adoptChild", () => {
//   it("adds child to children of the parent", () => {
//     const parent = new Pet("Dave");
//     const child = new Pet("Amelia");
//     parent.adoptChild(child);
//     expect(parent.children[0].name).toBe("Amelia");
//   });
// });

describe("adoptChild", () => {
  it("adds child object to parent object's children array", () => {
    const pet = new Pet("Fido");
    const baby = new Pet("Daisy");
    pet.adoptChild(baby);
    expect(pet.children).toEqual([baby]);
  });
});
