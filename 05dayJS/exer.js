const array = []

const fiveItems = ["one", "two", "three", "four", "five"]
console.log(fiveItems.length)
console.log(fiveItems[0], fiveItems[(fiveItems.length - 1) / 2], fiveItems[fiveItems.length - 1])

const mixedDataTypes = [fiveItems, array, "arrayTypeofString", 22, { name: "Semen", age: 19}, true]
console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[itCompanies.length - 1]) //exercise 9

let newItCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" //string
console.log(newItCompanies, `\ntype = ${typeof(newItCompanies)}`) //still string

newItCompanies = newItCompanies.split(", ") //string becomes an array
console.log(newItCompanies, `\ntype = ${typeof(newItCompanies)}`) //array

console.log(newItCompanies.join('\n')) //exercise 10


console.log(typeof(itCompanies))
//11
// function toUpp(array)
// {
//     for (let i = 0; i < array.length; i++)
//         piece = array[i].toString();
//         piece.toUpperCase()
// }
// console.log(toUpp(newItCompanies))
// console.log(itCompanies.isArray())

//13
function existInItCompanies(string){
    for (let i = 0; i < itCompanies.length; i++){
        element = itCompanies[i]
        if (element == string)
            return 0;
    }
    return -1;
}

console.log(existInItCompanies("Amazon"))
console.log(existInItCompanies("NVIDIA"))


function filterBy_o_InItCompanies(){
    for (let i = 0; i < itCompanies.length; i++){
        element = itCompanies[i].toLowerCase()
        for (let j = 0, counter = 0; j < element.length; j++){
            if (counter > 0)
                itCompanies.splice(i, 1) // delete company with more than one "o"
            if (element[j] == "o")
                counter++;
        }
    }
    return -1;
}
let soMuchNewItCompanies = [...itCompanies]
filterBy_o_InItCompanies()
console.log(itCompanies)
console.log(soMuchNewItCompanies)

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

