import countriesData from "../../data/countries_data.js";

const captionContent = "Country population data"

const headContent = ["Country", "Popuation"];

const bodyContent = countriesData;
const maxRows = 20;
const keysToFind = ["name", "population"];

export const tableData = {
  captionContent,
  headContent,
  bodyContent,
  maxRows,
  keysToFind
}


