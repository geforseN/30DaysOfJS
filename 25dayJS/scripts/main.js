import countriesData from "../data/countries_data.js";
// console.log(countries_data) 

// обьект с полями: название страны, её популяция, массив языков
const usefulCountriesData = countriesData.map(({ name, population, languages }) => {
  return {
    name,
    population,
    languages
  }
})


const MAX_COUNTRIES = 20;


//делаем копию массива usefulCountriesData, т.к sort изменяет сортируемый массив
const sortedFromLowestPopulation = [...usefulCountriesData].sort((a, b) => a.population - b.population)
const sortedFromHighestPopulation = [...usefulCountriesData].sort((a, b) => b.population - a.population)

// console.log(sortedFromLowestPopulation[0])
console.log(sortedFromHighestPopulation[0])
// console.log(usefulCountriesData[0])

//массив с массивами языков со всех стран
const languages = usefulCountriesData.map(({ languages }) => languages)
// console.log(languages)



const graphContainer = document.body.querySelector(".graph")
const populationButton = document.body.querySelector(".population")
console.log(populationButton, graphContainer)



const table = document.createElement("table")
graphContainer.append(table)

//  thead START 

const thead = document.createElement("thead") 
table.append(thead)

const tr = document.createElement("tr")
thead.append(tr)

const thArray = ["Country", "Popuation"]

for (const country of thArray){
  console.log(country)
  const th = document.createElement("th")
  th.textContent = `${country}`
  tr.append(th)
}

//  thead END

// tbody START  tbody > tr > td 'text'

const tbody = document.createElement("tbody")
table.append(tbody)

for (let i = 0; i < MAX_COUNTRIES; i++){
  let tr = document.createElement("tr")
  tbody.append(tr)
  
  //very bad
  let {name, population} = sortedFromHighestPopulation[i];
  let arr = [name, population]

  for (const value of arr){
    const td = document.createElement("td")
    td.textContent = `${value}`
    tr.append(td)
  }

}


// for (let i = 0; i < 10; i++){
//   let country = document.createElement("li")
//   let {name, population} = sortedFromHighestPopulation[i];
//   country.textContent = `${name} ${population}`
//   // document.body.appendChild(country)
//   graphContainer.append(country)
// }