import { Agent } from "http";
import fetch from "node-fetch";

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

function fetchDataPromise(url){
    fetch(url).then(response => response.json())
    .then(data => console.log(data))
    .then(data => data)
    .catch(error => console.log(error))
}

const fetchDataAsyncAwait = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        return data;
    } catch (err) {
        console.error(err)
    } 
    }

const def = {
    name: "dede",
    age: 22
}

let fetchedData = await fetchDataAsyncAwait(countriesAPI)

const fetched = {...fetchedData}

console.log(typeof fetchedData, fetchedData)

console.log(JSON.stringify(fetched))

console.log(JSON.stringify(fetchedData))

// console.log(Object.keys(fetched).forEach(
//     (country) => {
//         console.log("country", country, typeof country);
//         console.log(Object.entries(country))
//         console.log(Object.keys(country).filter(key => key === "name"));
//     }
// )) 

// console.log(JSON.stringify(fetchedData).search((key, value) => key === "name" && value === "Afghanistan"))

//let {country, capital, languages, population, area} = fetchedData
//console.log(country, capital)

//fetchDataPromise(countriesAPI)
        // const filtered = data.filter(obj => {
        //     console.log(typeof obj)
        //     let needfulData = []
        //     needfulData.push(obj.name)
        //     needfulData.push(obj.capital)
        // })
        // console.log(filtered)