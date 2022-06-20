import {populationTableData, languagesTableData} from "./tableData.js";
// ??captionInit
import theadInit from "./theadInit.js";
import tbodyInit from "./tbodyInit.js"
import validateObjects from "../validateObjects.js"



function tableInit(tableData){
  const { captionContent, headContent, bodyContent, sort, keysToFind, maxRows } = tableData;

  const tableHead = theadInit(headContent);

  const validObjects = validateObjects(bodyContent, sort, keysToFind, maxRows);
  const tableBody = tbodyInit(validObjects);

  const tableCaption = document.createElement("caption");
  tableCaption.textContent = captionContent;

  console.log(tableCaption);
  return {tableCaption, tableHead, tableBody};
}

export const populationElement = tableInit(populationTableData);
export const languagesElement = tableInit(languagesTableData);