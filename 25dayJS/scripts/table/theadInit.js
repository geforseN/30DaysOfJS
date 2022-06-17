export default function theadInit(theadContent) {
  
  const thead = document.createElement("thead") 

  //tableRow это верхний ряд таблицы (шапка),
  //в столбцах tableRow будут данные из массива theadContent
  const tableRow = document.createElement("tr")
  thead.append(tableRow)

  //проходися по всему массиву theadCoundent
  //и добавляем в каждый столбец данные
  for (const thContent of theadContent){
    const tableHeader = document.createElement("th")
    tableHeader.textContent = `${thContent}`
    tableRow.append(tableHeader)
  }

  return thead;
}

/* 
  <thead>
    <tr>
      <th>${Content[0]}</th>
      ...
      ...
      <th>${Content[array.length]}</th>
    </tr>
  </thead> 
*/


