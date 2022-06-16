import countries_data from "../data/countries_data.js";

// console.log(countries_data)  


const needfull_data = countries_data.map( ({name, population, languages}) => {
  return {
    name,
    population,
    languages
  }


})

console.log(needfull_data)
const sortedByPopulatin = needfull_data.sort( ({population}) => )