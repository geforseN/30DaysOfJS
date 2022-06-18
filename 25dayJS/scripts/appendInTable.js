export default function appendInTable(table, tableContent) {
  const {
    tableCaption: caption, 
    tableHead: head,
    tableBody: body
  } = tableContent;

  table.append(caption, head, body);
  
  return table;
}



