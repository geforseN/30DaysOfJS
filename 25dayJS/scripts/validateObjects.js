import decreaseObjectsEntries from "./decreaseObjectsEntries.js";

export default function validateObjects(objects, sort, keysToFind, maxRows) {
  const decreasedObjects = decreaseObjectsEntries(objects, keysToFind);
  const sortedObjects = sort(decreasedObjects);
  const slicedObjects = sortedObjects.slice(0, maxRows);
  const validObjects = slicedObjects;
  
  return validObjects;
}

