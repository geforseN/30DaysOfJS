import decreaseObjectsEntries from "./decreaseObjectsEntries.js";
// add sortType , sort(objectsArray)
// добавить в Object.prototype метод decrease?

export default function validateObjects(objects, sort, keysToFind, maxRows) {
  const decreasedObjects = decreaseObjectsEntries(objects, keysToFind);
  const sortedObjects = sort(decreasedObjects);
  console.log(sortedObjects)
  const slicedObjects = sortedObjects.slice(0, maxRows);
  const validObjects = slicedObjects;
  
  return validObjects;
}

