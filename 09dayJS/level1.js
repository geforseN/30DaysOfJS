const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testArr = [...names, ...numbers]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1 устно


const printer = (element) => console.log(element);  // 2

const printAllCountries = countries.forEach(printer);  // 3

const printAllNames = names.forEach(printer);  // 4

const printAllNumbers = numbers.forEach(printer);  // 5

const countriesToUppercase = countries.map((country) => country.toUpperCase())  // 6
console.log(countriesToUppercase)

const countriesLength = countries.map((country) => country.length)  // 7
console.log(countriesLength)

const numbersSquare = numbers.map((number) => number * number)  // 8
console.log(numbersSquare)

const namesToUppercase = names.map((name) => name.toUpperCase())  // 9
console.log(namesToUppercase)

const correspondProducts = products.map(
    (product) => `product: ${product.product}   price: ${product.price}`)  // 10?
console.log(correspondProducts)

const filterCountriesByInclude$land$ = countries.filter(
    (country) => country.includes("land"))  // 11  IceLand
printer(filterCountriesByInclude$land$)

const filterCountriesHasSixChar = countries.filter(
    (country) => country.length === 6)  // 12
printer(filterCountriesHasSixChar)

const filterCountriesHasMoreFiveChar = countries.filter(
    (country) => country.length > 5)  // 13  >= 6
printer(filterCountriesHasMoreFiveChar)

const filterCountriesStartsWith$E$ = countries.filter(
    (country) => country.startsWith("E"))
printer(filterCountriesStartsWith$E$)  //  14 (no Estonia in array)

const filterProductsHasPrices = products.filter(
    (product) => product.price.toString().trim() != '')  // 15
printer(filterProductsHasPrices)

const getStringList = (array = []) => 
    array.filter((elem) => typeof elem == typeof "string" )  // 16 

printer(getStringList(testArr))

const sumAllNumbers = numbers.reduce((acc, cur) => acc + cur, 0)  //  17
printer(sumAllNumbers)

// const concatAllCountries = countries.reduce(
//     (acc = "", curCountry) )  //  18 hard + bugged (no Estonia in array)


// 19 устно 


// 20 
const isSomeNamesLengthMoreSeven = names.some(
    (name) => name.length > 7)
printer(isSomeNamesLengthMoreSeven)


// 21
const isAllCountriesContains$land$ = countries.every(
    (country) => country.includes("land"))
printer(isAllCountriesContains$land$)


// 22 устно


// 23
const findCountryHasSixChar = countries.find(
    (country) => country.trim().length === 6)
printer(findCountryHasSixChar)


// 24
const findIndexCountryHasSixChar = countries.findIndex(
    (country) => country.trim().length === 6)
printer(findIndexCountryHasSixChar)


// 25
const find$Norway$InCountries = countries.findIndex(
    (country) => country === "Norway")
printer(find$Norway$InCountries)


// 26
const find$Russia$InCountries = countries.findIndex(
    (country) => country === "Russia")
printer(find$Russia$InCountries)


//level 1 complete (except 18)




