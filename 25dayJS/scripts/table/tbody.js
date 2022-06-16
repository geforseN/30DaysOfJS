const thArray = ["Country", "Popuation"]
console.log(thArray)

export default function tbodyInit(countriesArray){

  // создаём элемент tbody,
  // в котором будет находится countriesArray.length строк (tr)
  const tbody = document.createElement("tbody")

  for (let i = 0; i < countriesArray.length; i++){
    let tr = document.createElement("tr")
    tbody.append(tr)
    
    //very bad
    let {name, population} = countriesArray[i];
    let arr = [name, population]

    for (const value of arr) {
      const td = document.createElement("td")
      td.textContent = `${value}`
      tr.append(td)
    }
  }

  return tbody;
  
}