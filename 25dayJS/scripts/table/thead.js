export default function theadInit(thContentArray) {
  //создаем тег thead
  const thead = document.createElement("thead") 

  //помещаем в thead созданый tr
  //tr это верхний ряд таблицы (шапка),
  //в столбцах которого будут находится строки из массива thContentArray
  const tr = document.createElement("tr")
  thead.append(tr)

  //проходися по всему массиву thContentArray
  //и добавляем в каждый столбец нужный контент
  for (const thContent of thContentArray){
    const th = document.createElement("th")
    th.textContent = `${thContent}`
    tr.append(th)
  }

  return thead;
}

/* 
  <thead>
    <tr>
      <th>${thContent[0]}</th>
      ...
      ...
      <th>${thContent[thContentArray.length]}</th>
    </tr>
  </thead> 
*/


