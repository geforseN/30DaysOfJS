import countriesData from "../data/countries_data.js";
import theadInit from "./table/theadInit.js";
import tbodyInit from "./table/tbody.js";
import changeSubtitle from "./subtitle.js";

// //массив с массивами языков со всех стран

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

const subtitle = document.body.querySelector(".subtitle")
changeSubtitle(subtitle, countriesData.length)
 
const populationButton = document.body.querySelector("button.population");
let isTableActive = false;


//  шапка!!!
const tableHeadArray = ["Country", "Popuation"];
const tableHead = theadInit(tableHeadArray);

//  тело!!!
// переменные для тела таблицы
const maxCountries = 20;
const keysToFind = ["name", "population"];
//  добавляем тело таблицы, состоящее из maxCountries рядов,
const countriesArray = sortedFromHighestPopulation.slice(0, maxCountries);
const tableBody = tbodyInit(countriesArray, keysToFind)


//  подпись!!!
const caption = document.createElement("caption")
caption.textContent = "Данные о популяции стран"
const populationCaption = caption


const table = document.body.querySelector(".table"); 
function appendInTable(table, tableCaption, tableHead, tableBody) {
  table.append(tableCaption)
  table.append(tableHead);
  table.append(tableBody)

  return table;
}


// const languages = usefulCountriesData.map(({ languages }) => languages)


appendInTable(table, populationCaption, tableHead, tableBody)



  // //  находим в DOM элемент c классом chart
  // const chart = document.body.querySelector(".chart"); 
  // // и помещаем в в него элем. с классом table
  // chart.append(table);