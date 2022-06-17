import countriesData from "../data/countries_data.js";
import theadInit from "./table/theadInit.js";
import tbodyInit from "./table/tbodyInit.js";
import changeSubtitle from "./subtitle.js";
import validateObjects from "./validateObjects.js";


// обьект с полями: название страны, её популяция, массив языков
const usefulCountriesData = countriesData.map(
  ({ name, population, languages }) => { 
    return {
      name,
      population,
      languages
    }
}); 
// console.log(Object.values(usefulCountriesData));



//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
// const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population);
// const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population);

const populationButton = document.body.querySelector("button.population");
let isTableActive = false;



const tableHeadArray = ["Country", "Popuation"];
const tableHead = theadInit(tableHeadArray);


const maxRows = 20;
const keysToFind = ["name", "population"];
const validObjects = validateObjects(usefulCountriesData, keysToFind, maxRows)
const tableBody = tbodyInit(validObjects)


const captionContent = "Country population data"
const tableCaption = document.createElement("caption")
tableCaption.textContent = captionContent


const table = document.body.querySelector(".table"); 
function appendInTable(table, caption, head, body) {
  table.append(caption)
  table.append(head);
  table.append(body)

  return table;
}


// const languages = usefulCountriesData.map(({ languages }) => languages)


appendInTable(table, tableCaption, tableHead, tableBody)

const subtitle = document.body.querySelector(".subtitle")
changeSubtitle(subtitle, countriesData.length)

