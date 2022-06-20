export default function appendInTable(table, tableContent) {
  const {
    tableCaption: caption, 
    tableHead: head,
    tableBody: body
  } = tableContent;

  table.appendChild(caption);
  table.appendChild(head)
  table.appendChild(body)
  
  return table;
}



