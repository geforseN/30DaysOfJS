import countriesData from "../../data/countries_data.js";
import findAmountOfLanguagesUses from "../findAmountOfLAnguagesUses.js";

export const languagesTableData = {
  captionContent: "Most Spoken Languages In The World",
  headContent: ["Languages", "Amount"],
  bodyContent: countriesData,
  sort(bodyContent){
    const languages = bodyContent.map(({ languages }) => languages).flat();
    return findAmountOfLanguagesUses(languages).sort((a, b) => b.amount - a.amount);
  },
  maxRows: 250,
  keysToFind: ["name", "languages"],
}

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

// const object = {
//   captionContent: "string",
//   headContent: "stringArray",
//   keysToFind: "stringArray",
//   maxRows: "number",
//   sortType: "function",
//   bodyContent: "objectsArray",
// };
