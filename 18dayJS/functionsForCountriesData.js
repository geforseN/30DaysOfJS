function formatCountryData(country){
    const {name, capital, languages, population, area} = country;  //  languages also is an array of objects
    const formatedLanguages = languages.map((language, index) => {  //  format language for var formatedCountryData 
        if (index > 0) 
            return " " + language.name;  //  if the country is not the first, add a space
        return language.name  // if the first country, do not add a space before it 
    })
    const nextLine = "\n", squareKM = "km ^ 2";  //  abbreviations

    const formatedCountryData = String.prototype.concat(
        "Country: ", name, nextLine,
        "Capital: ", capital, nextLine,
        "Languages: ", formatedLanguages, nextLine, 
        "Population: ", population, nextLine,
        "Area: ", area, squareKM, nextLine
    )

    return formatedCountryData; //
}

export {formatCountryData}