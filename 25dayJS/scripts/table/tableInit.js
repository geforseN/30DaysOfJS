import { tableData } from "./tableData.js";
// //captionInit
import theadInit from "./theadInit.js";
import tbodyInit from "./tbodyInit.js"
import validateObjects from "../validateObjects.js"

const { captionContent, headContent, bodyContent, keysToFind, maxRows } = tableData;

function tableInit(captionContent, headContent, bodyContent, keysToFind, maxRows){
  const tableHead = theadInit(headContent);

  const validObjects = validateObjects(bodyContent, keysToFind, maxRows)
  const tableBody = tbodyInit(validObjects)

  const tableCaption = document.createElement("caption")
  tableCaption.textContent = captionContent


  return {tableCaption, tableHead, tableBody};
}

export const tableElement = tableInit(captionContent, headContent, bodyContent, keysToFind, maxRows)