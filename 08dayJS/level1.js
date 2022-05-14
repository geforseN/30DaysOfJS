dog = {}
console.log(dog)
dog.legs = 4
dog.color = "brown"
dog.age = 5
dog.bark = () => {return "woof woof"}

//console.log(Object.entries(dog))

dog.breed = null
dog.getDogInfo = () => {return Object.entries(dog)}

console.log(dog.getDogInfo())

//level 1 done!