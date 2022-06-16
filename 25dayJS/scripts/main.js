import countriesData from "../data/countries_data.js";
import theadInit from "./table/thead.js";
import tbodyInit from "./table/tbody.js";
// console.log(countries_data) 

// обьект с полями: название страны, её популяция, массив языков
const usefulCountriesData = countriesData.map(({ name, population, languages }) => {
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
// console.log(sortedFromHighestPopulation)
// console.log(usefulCountriesData[0])

//массив с массивами языков со всех стран
const languages = usefulCountriesData.map(({ languages }) => languages)
// console.log(languages)



const graphContainer = document.body.querySelector(".graph")
const populationButton = document.body.querySelector(".population")
// console.log(populationButton, graphContainer)


const table = document.createElement("table")
graphContainer.append(table)

const thArray = ["Country", "Popuation"]
table.append(theadInit(thArray))


const maxCountries = 20;
const countriesArray = sortedFromHighestPopulation.filter( (elem, index) => index < maxCountries)
table.append(tbodyInit(countriesArray))


// tbody START  tbody > tr > td 'text'

// const tbody = document.createElement("tbody")
// table.append(tbody)

// for (let i = 0; i < MAX_COUNTRIES; i++){
//   let tr = document.createElement("tr")
//   tbody.append(tr)
  
//   //very bad
//   let {name, population} = sortedFromHighestPopulation[i];
//   let arr = [name, population]

//   for (const value of arr){
//     const td = document.createElement("td")
//     td.textContent = `${value}`
//     tr.append(td)
//   }

// }
