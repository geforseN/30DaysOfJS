//  Print out all the cat names in to catNames variable.
function getCatName(cat){
    const {name} = cat;
    return `Name: ${name}`;
}

//  Read the cats api and find the average weight of cat in metric unit.
function getAverageCatWeight(cat)
{
    const {weight} = cat;
    const {metric} = weight;    // metric ~= "smallerNum - biggerNum"

    const last = Number(metric.at(-1))  //  bigger number
    const first = Number(metric.at(0))  //  smaller number
    const average = last - first / 2;

    return average
}


export {getCatName, getAverageCatWeight}