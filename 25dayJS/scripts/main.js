import countriesData from "../data/countries_data.js";
// console.log(countries_data) 

const usefulCountriesData = countriesData.map(({name, population, languages}) => {
  return {
    name,
    population,
    languages
  }
})

//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population)
const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population)

// console.log(sortedFromLowestPopulation[0])
// console.log(sortedFromHighestPopulation[0])
// console.log(usefulCountriesData[0])


