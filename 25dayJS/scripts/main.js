import countriesData from "../data/countries_data.js";
import theadInit from "./table/theadInit.js";
import tbodyInit from "./table/tbodyInit.js";
import changeSubtitle from "./subtitle.js";


// обьект с полями: название страны, её популяция, массив языков
const usefulCountriesData = countriesData.map(
  ({ name, population, languages }) => { 
    return {
      name,
      population,
      languages
    }
}); // console.log(Object.values(usefulCountriesData));



//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population);
const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population);

const populationButton = document.body.querySelector("button.population");
let isTableActive = false;


//  шапка!!!
const tableHeadArray = ["Country", "Popuation"];
const tableHead = theadInit(tableHeadArray);

//  тело!!!
// переменные для тела таблицы
const maxRows = 20;
let keysToFind = ["name", "population"];

let countriesArray = sortedFromHighestPopulation.slice(0, maxRows);

function validData(objectArray, keysToFind) {
  const goodObjectArray = [];
  for (const object of objectArray) {
    // objectKeys - это массив, состоящий из stirng
    const objectKeys = Object.keys(object);
    const goodObject = {};
    for (const key of keysToFind) {
      const isKeyFound = objectKeys.indexOf(`${key}`) !== -1;
      if (isKeyFound) {
        const objectValue = object[key];
        goodObject[key] = objectValue;
      }
    }
    goodObjectArray.push(goodObject);
  } 

  return goodObjectArray;
}

countriesArray = validData(countriesArray, keysToFind);

const tableBody = tbodyInit(countriesArray)


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

const subtitle = document.body.querySelector(".subtitle")
changeSubtitle(subtitle, countriesData.length)

