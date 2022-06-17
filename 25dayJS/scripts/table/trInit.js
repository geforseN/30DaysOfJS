export default function trInit(thEntireContent) {

  const tr = document.createElement("tr");

  //проходися по всему массиву thContent
  //и добавляем в каждый столбец данные
  for (const thContent of thEntireContent) {
    const th = document.createElement("th");
    th.textContent = `${thContent}`;
    tr.append(th);
  }

  return tr;
}

/*
<tr>
  <th>${Content[0]}</th>
  ...
  ...
  <th>${Content[array.length]}</th>
</tr>
*/