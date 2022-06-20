export default function findAmountOfLanguagesUses(languages){
  const languagesAmount = {};
  for (const language of languages){
    if (languagesAmount.hasOwnProperty(language) === false)
      languagesAmount[language] = 1;
    else if (languagesAmount.hasOwnProperty){
      languagesAmount[language] += 1; 
    }

  }
  
  // languageArray ~= ["English, 91"]
  return Object.entries(languagesAmount).map(languageArray => ({
    name: languageArray [0],
    amount: languageArray [1],
  })
  );

}
// new Obje
// export default function findAmountOfLanguagesUses(languages){
//   const array = []; 
//   for (const language of languages){
//     if (array.includes(language) === false){
//       const object = {};
//       object[language] = 1;
//     }
//     else if (array.includes(language)){
//       object[language]  += 1; 
//     }

//   }
//   Array.prototype.
//   return array;
// }