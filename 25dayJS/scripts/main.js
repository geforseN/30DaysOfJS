import { populationElement, languagesElement } from "./table/tableInit.js";
import appendInTable from "./appendInTable.js";
import countriesData from "../data/countries_data.js";
import changeSubtitle from "./changeSubtitle.js";

const subtitle = document.body.querySelector(".subtitle");
changeSubtitle(subtitle, countriesData.length);

const populationButton = document.body.querySelector("button.population");
const languagesButton = document.body.querySelector("button.languages");
populationButton.addEventListener("click", populationButtonListener);
languagesButton.addEventListener("click", languagesButtonListener);

const chartWindow = document.body.querySelector(".chart-window");

const populationTable = document.createElement("table");
appendInTable(populationTable, populationElement);
populationTable.className = "table populationTable";
populationTable.style.display = "none";

const languagesTable = document.createElement("table");
appendInTable(languagesTable, languagesElement);
languagesTable.className = "table languagesTable";
languagesTable.style.display = "none";

chartWindow.appendChild(populationTable);
chartWindow.appendChild(languagesTable);

function populationButtonListener(event){
  // ! добавлять класс showed на .button:focus и изменять цвет
  switch (populationTable.style.display) {
    case "table":
      populationTable.style.display = "none";
      break;
    case "none":
      populationTable.style.display = "table";
      break;
    default:
      break;
  }
}

function languagesButtonListener(event){
  switch (languagesTable.style.display) {
    case "table":
      languagesTable.style.display = "none";
      break;
    case "none":
      languagesTable.style.display = "table";
      break;
    default:
      break;
  }
}
