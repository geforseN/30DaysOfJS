class Animal {
    constructor(name = undefined, age = 0, color = undefined, legs = 0){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    // static objectName = () => "Animal";
    // static objectNameFunc() {return "Animal"}

    get getName() {return this.name;}
    get getAge() {return this.age;}
    get getColor() {return this.color}
    get getLegs() {return this.legs}

    set setName (name) {this.name = name}
    set setAge(age) {this.age = age} 
    set setColor(color) {this.color = color} 
    set setLegs (legs) {this.legs = legs}

    printObjectAtributes(){
        console.log(`Name = ${this.name}, Age = ${this.age}, Color = ${this.color}, Legs = ${this.legs}`
        )
    }
}

class Cat extends Animal{
    constructor(){
        super()
    }
    printMeow(){
        console.log("Meow")
    }
}

class Dog extends Animal{
    constructor(){
        super()
    }
    printWoof(){console.log("Woof")}
}


let thisAnimal = new Animal()
console.log(thisAnimal)


thisAnimal.rage = true;
thisAnimal.printObjectAtributes();

thisAnimal = new Animal("bo", 2, undefined, 4);
thisAnimal.printObjectAtributes();

const myCat = new Cat("Belka", 4, "White", 4)
myCat.printObjectAtributes()
console.log(Math.trunc())