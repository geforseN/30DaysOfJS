export default function validObjectEntries(objectArray, keysToFind) {
  const validObjectArray = [];
  for (const object of objectArray) {
    // objectKeys - это массив, состоящий из stirng
    const objectKeys = Object.keys(object);
    const validObject = {};

    for (const key of keysToFind) {
      const isKeyFound = objectKeys.indexOf(`${key}`) !== -1;

      if (isKeyFound) {
        const objectValue = object[key];
        validObject[key] = `${objectValue}`;
      }
    }

    validObjectArray.push(validObject);
  } 

  return validObjectArray;
}