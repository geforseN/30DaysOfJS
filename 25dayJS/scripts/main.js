import { tableElement } from "./table/tableInit.js";
import appendInTable from "./appendInTable.js";
import countriesData from "../data/countries_data.js";
import changeSubtitle from "./changeSubtitle.js";

// const populationButton = document.body.querySelector("button.population");
// let isTableActive = false;

let table = document.body.querySelector(".table");
appendInTable(table, tableElement)

const subtitle = document.body.querySelector(".subtitle")
changeSubtitle(subtitle, countriesData.length)

// const languages = usefulCountriesData.map(({ languages }) => languages)
