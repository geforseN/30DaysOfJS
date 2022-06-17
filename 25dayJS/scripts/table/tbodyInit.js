import { trInitTd } from "./trInit.js";

export default function tbodyInit(objectArray) {

  const tbody = document.createElement("tbody");

  for (const object of objectArray) {

    //  создаем новый ряд и добавляем его в таблицу
    const tr = trInitTd(object);
    tbody.append(tr);

  }
  return tbody;
}

/* 
<tbody>
  <tr>
    <td>object[0].key[0]</td>
    ...
    ...
    <td>object[0].key[N]</td>
  </tr>
  ...
    ...
    ...
    ...
  ...
  <tr>
    <td>object[objectArray.length].key[0]</td>
    ...
    ...
    <td>object[objectArray.length].key[N]</td>
  </tr>
</tbody>

*/
