//const max = (elem1, elem2) => elem1 > elem2? elem1 : elem2;

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

const unionArray = [...a, ...b]
console.log(unionArray)

const setA = new Set(a)
const setB = new Set(b)


// 1
const unionSet = new Set(unionArray)
console.log(unionSet)
unionSet.clear()


// 1
for (const iterator of setA)
    unionSet.add(iterator)

for (const iterator of setB)
    unionSet.add(iterator)

console.log(unionSet)
unionSet.clear()


// 2
const intersectionSet = new Set
for (const iterator of setA)
    if (setB.has(iterator))
        intersectionSet.add(iterator)
console.log(intersectionSet)
intersectionSet.clear()


// 3 
const differenceSet = new Set()
for (const iterator of setA)
    if (!setB.has(iterator))
        differenceSet.add(iterator)
console.log(differenceSet)
differenceSet.clear()


// level 2 done