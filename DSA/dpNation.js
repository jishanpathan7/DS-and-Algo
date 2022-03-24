class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " says 'Grrrrrr'");
  }

  
}

  let d = new Animal("Mitzie")
  
  d.speak()