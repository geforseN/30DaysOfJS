import { Agent } from "http";
import fetch from "node-fetch";

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

function fetchDataPromise(url){
    fetch(url).then(response => response.json())
    .then(data => console.log(data))
    .then(data => data)
    .catch(error => console.log(error))
}

export {fetchDataAsyncAwait, fetchDataPromise};