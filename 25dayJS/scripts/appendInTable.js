export default function appendInTable(table, tableContent) {
  const {
    tableCaption: caption, 
    tableHead: head,
    tableBody: body
  } = tableContent;

  table.append(caption)
  table.append(head);
  table.append(body)

  return table;
}



