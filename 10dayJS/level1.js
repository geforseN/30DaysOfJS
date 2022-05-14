// 1

 const mySet = new Set();
 console.log(mySet)


// 2
for (let i = 0; i <= 10; i++)
    mySet.add(i);
console.log(mySet)


// 3
mySet.delete(Math.floor(Math.random() * 11))
console.log(mySet)


// 4
mySet.clear()
console.log(mySet)


// 5
const countries = ['Finland', 'Sweden', 'Norway','Russia', 'Ukraine']
const countriesSet = new Set(countries)
console.log(countriesSet)


// 6
const countriesPlusLengthMap = new Map()
for (country of countriesSet)
    countriesPlusLengthMap.set(country, country.length)
console.log(countriesPlusLengthMap)

// level 1 done