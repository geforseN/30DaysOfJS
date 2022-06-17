import trInit from "./trInit.js";

export default function theadInit(thEntireContent) {
  
  const thead = document.createElement("thead") 

  //tr это верхний таблицы ,
  //в столбцах tr находятся даныые thContent
  const tr = trInit(thEntireContent)
  thead.append(tr)

  return thead;
}

/* 
  return thead;

  <thead>
    <tr>
      <th>${Content[0]}</th>
      ...
      ...
      <th>${Content[array.length]}</th>
    </tr>
  </thead> 
*/


