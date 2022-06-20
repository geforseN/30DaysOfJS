import countriesData from "../../data/countries_data.js";
 // ! add sortType in objects

export const languagesTableData = {
  captionContent: "Languages data",
  headContent: ["Country", "Languages"],
  bodyContent: countriesData,
  sort(countriesData){
    return [...countriesData].sort((a, b) => b.language - a.language);
  },
  maxRows: 10,
  keysToFind: ["name", "country"],
}

export const populationTableData = {
  captionContent: "Country population data",
  headContent: ["Country", "Popuation"],
  bodyContent: countriesData,
  sort(countriesData){
    return [...countriesData].sort((a, b) => b.population - a.population);
  },
  maxRows: 20,
  keysToFind: ["name", "population"],
};


// const objClass = {
//   captionContent: "string",
//   headContent: "stringArray",
//   keysToFind: "stringArray",
//   maxRows: "number",
//   sortType: "function",
//   bodyContent: "objectsArray",
// };
