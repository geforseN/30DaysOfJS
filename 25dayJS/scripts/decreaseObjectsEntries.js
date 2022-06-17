export default function decreaseObjectsEntries(objectArray, keysToFind) {
  const validObjectsArray = [];
  for (const object of objectArray) {
    // objectKeys - это массив, состоящий из stirng
    const objectKeys = Object.keys(object);
    const validObjects = {};

    for (const key of keysToFind) {
      const isKeyFound = objectKeys.indexOf(`${key}`) !== -1;

      if (isKeyFound) {
        const objectValue = object[key];
        validObjects[key] = `${objectValue}`;
      }
    }

    validObjectsArray.push(validObjects);
  } 

  return validObjectsArray;
}