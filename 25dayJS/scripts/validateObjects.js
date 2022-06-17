import decreaseObjectsEntries from "./decreaseObjectsEntries.js";
// add sortType , sort(objectsArray)
// добавить в Object.prototype метод decrease?
export default function validateObjects(objects, keysToFind, maxRows) {
  const decreasedObjects = decreaseObjectsEntries(objects, keysToFind);
  const sortedObjects = [...decreasedObjects].sort((a, b) => b.population - a.population);
  const slicedObjects = sortedObjects.slice(0, maxRows);
  const validObjects = slicedObjects;
  
  return validObjects;
}

