import { Agent } from "http";
import fetch from "node-fetch";
import {fetchDataAsyncAwait} from "./promiseFunctions.js";
import {formatCountryData} from "./functionsForCountriesData.js"
import { getCatName, getAverageCatWeight } from "./functionsForCatsData.js";

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//  fetched data is an array of objects
let fetchedData = await fetchDataAsyncAwait(countriesAPI)

//  level 1
//  formatedCountryData is an array of strings
const formatedCountryData = fetchedData.map(country => formatCountryData(country))


//  level 2
fetchedData = await fetchDataAsyncAwait(catsAPI)
//  console.log(fetchedData)
//  меня заставили назвать эту переменную так  
const catNames = fetchedData.map(cat => getCatName(cat))
 

// level 3 exercise 1
//  Read the cats api and find the average weight of cat in metric unit.
const catsWeight = fetchedData.map(cat => getAverageCatWeight(cat))
const totalCatsWeight = catsWeight.reduce((catsWeight, catWeight) => catsWeight += catWeight, 0)
const averageCatsWeight = totalCatsWeight / catsWeight.length;


export {formatedCountryData, catNames, catsWeight}
