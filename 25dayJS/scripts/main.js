import countriesData from "../data/countries_data.js";
import theadInit from "./table/thead.js";
import tbodyInit from "./table/tbody.js";

// //массив с массивами языков со всех стран
// const languages = usefulCountriesData.map(({ languages }) => languages)

// console.log(Object.values(usefulCountriesData))


// обьект с полями: название страны, её популяция, массив языков
const usefulCountriesData = countriesData.map(
  ({ name, population, languages }) => { 
    return {
      name,
      population,
      languages
    }
});


//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population);
const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population);


//  находим в DOM div-ы c классами graph и population
const graphContainer = document.body.querySelector(".graph");
const populationButton = document.body.querySelector(".population");


//  создаем тег table и помещаем его в div.graph
const table = document.createElement("table");
graphContainer.append(table);


//  добавляем шапку таблицы
const thArray = ["Country", "Popuation"];
table.append(theadInit(thArray));


// переменные для тела таблицы
const maxCountries = 10;
const keysToFind = ["name", "population"];
const countriesArray = sortedFromHighestPopulation.slice(0, maxCountries);

//  добавляем тело таблицы, состоящее из maxCountries рядов,
//  в столбацах которого будут находится значения от нужных ключей
table.append(tbodyInit(countriesArray, keysToFind));


