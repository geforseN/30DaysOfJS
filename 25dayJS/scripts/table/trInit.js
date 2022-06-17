export function trInitTh(thEntireContent) {
  const tr = document.createElement("tr");

  for (const thContent of thEntireContent) {
    const th = document.createElement("th");
    
    th.textContent = `${thContent}`;
    tr.append(th);
  }

  return tr;
}

export function trInitTd(object) {
  const tr = document.createElement("tr");
  const objectKeys = Object.keys(object); 

  for (const key of objectKeys) {
      const td = document.createElement("td");
      const objectValue = object[key];

      td.textContent = `${objectValue}`;
      tr.append(td);
    
  }

  return tr;
}