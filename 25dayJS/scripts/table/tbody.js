export default function tbodyInit(countriesArray, keysToFind) {

  // создаём элемент tbody, количество рядов (tr) в котором
  // будет равняться количеству объектов (country)  
  // в массиве объктов countriesArray
  const tbody = document.createElement("tbody");

  //  проходимся по каждому объекту
  for (const country of countriesArray) {

    //  создаем новый ряд и добавляем его в таблицу
    let tr = document.createElement("tr");
    tbody.append(tr);
    
    const countryKeys = Object.keys(country);

    //проходимся по каджому ключу обьекта country
    for (const key of countryKeys) {
      
      //  если нашли подходящий ключ в обьекте country
      const isKeyFound = keysToFind.indexOf(key) !== -1;

      if (isKeyFound) {
        //  то создаем столбец, контентом которого 
        //  будет value у обьекта country
        const td = document.createElement("td");
        const value = country[key];

        //  добавляем контент в столбец и
        //  добавляем столбец в ряд
        td.textContent = `${value}`;
        tr.append(td);
      }
    }

  }
  return tbody;
}

/* 
<tbody>
  <tr>
    <td>country[0].key[0]</td>
    ...
    ...
    <td>country[0].key[N]</td>
  </tr>
  ...
    ...
    ...
    ...
  ...
  <tr>
    <td>country[countriesArray.length].key[0]</td>
    ...
    ...
    <td>country[countriesArray.length].key[N]</td>
  </tr>
</tbody>

*/
