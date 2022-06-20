import { populationElement, languagesElement } from "./table/tableInit.js";
import appendInTable from "./appendInTable.js";
import countriesData from "../data/countries_data.js";
import changeSubtitle from "./changeSubtitle.js";

const subtitle = document.body.querySelector(".subtitle");
changeSubtitle(subtitle, countriesData.length);


const populationButton = document.body.querySelector("button.population");
const languagesButton = document.body.querySelector("button.languages")
populationButton.addEventListener("click", populationButtonListener)
languagesButton.addEventListener("click", languagesButtonListener)

// const languages = usefulCountriesData.map(({ languages }) => languages)


const chartWindow = document.body.querySelector(".chart-window");

const populationTable = document.createElement("table");
appendInTable(populationTable, populationElement);
populationTable.className = "populationTable";
populationTable.style.display = "none";

const languagesTable = document.createElement("table");
appendInTable(languagesTable, languagesElement);
languagesTable.className = "languagesTable";
languagesTable.style.display = "none";

chartWindow.appendChild(populationTable);
chartWindow.appendChild(languagesTable);

function populationButtonListener(event){
  switch (populationTable.style.display) {
    case "block":
      console.log("popul block")
      populationTable.style.display = "none";
      break;
    case "none":
      console.log("popul none")
      populationTable.style.display = "block";
      break;
    default:
      break;
  }
}

function languagesButtonListener(event){
  switch (languagesTable.style.display) {
    case "block":
      console.log("lang block")
      languagesTable.style.display = "none";
      break;
    case "none":
      console.log("lang none")
      languagesTable.style.display = "block";
      break;
    default:
      break;
  }
}