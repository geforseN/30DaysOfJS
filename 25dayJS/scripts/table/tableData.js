import countriesData from "../../data/countries_data.js";


export const languagesTableData = {
  captionContent: "Languages data",
  headContent: ["Country", "Languages"],
  bodyContent: countriesData,
  sort(countriesData){
    return [...countriesData]
    .sort((a, b) => b.languages.length - a.languages.length)
  },
  maxRows: 10,
  keysToFind: ["name", "languages"],
}

export const languagesTableDataGood = {
  captionContent: "Most Spoken Languages In The World",
  headContent: ["Languages", ],
  bodyContent: countriesData,
  sort(bodyContent){
    return [...bodyContent].sort((a, b) => b.languages - a.languages);
  },
  maxRows: 250,
  keysToFind: ["name", "languages"],
}

// const object = {
//   captionContent: "string",
//   headContent: "stringArray",
//   keysToFind: "stringArray",
//   maxRows: "number",
//   sortType: "function",
//   bodyContent: "objectsArray",
// };
export const populationTableData = {
  captionContent: "Most Populated Countries In The World",
  headContent: ["Country", "Popuation"],
  bodyContent: countriesData,
  keysToFind: ["name", "population"],
  sort(bodyContent){
    return [...bodyContent].sort((a, b) => b.population - a.population);
  },
  maxRows: 20,
};

