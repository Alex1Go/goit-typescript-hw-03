class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected key: Key;
  protected door: boolean;
  protected tenants: Person[] = [];

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door && this.key) {
      this.tenants.push(person);
      console.log("Ви ввійшли.");
    } else {
      console.log("Двері зачинені.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): void {
    if (this.key && key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинені.");
    } else {
      console.log("УПС!! Ключ не підходить.");
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
