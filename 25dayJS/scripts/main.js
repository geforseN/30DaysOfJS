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

// console.log(Object.values(usefulCountriesData))

//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population)
const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population)


//массив с массивами языков со всех стран
const languages = usefulCountriesData.map(({ languages }) => languages)


//  находим в DOM div-ы c классами graph и population
const graphContainer = document.body.querySelector(".graph")
const populationButton = document.body.querySelector(".population")


//  создаем тег table и помещаем его в div.graph
const table = document.createElement("table")
graphContainer.append(table)


//  добавляем шапку таблицы
const thArray = ["Country", "Popuation"]
table.append(theadInit(thArray))

//  добавляем тело таблицы, состоящее из maxCountries рядов
const maxCountries = 3;
const countriesArray = sortedFromHighestPopulation.slice(0, maxCountries)

const keysToFind = ["name", "population"]
table.append(tbodyInit(countriesArray, keysToFind))


