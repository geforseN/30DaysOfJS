//1
statement = "The quote 'There is no exercise better for the heart than reaching down \
and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement)

//2
statement = "Love is not patronizing and charity isn't about pity, it is about love."
            +"Charity and love are the same -- with charity you give love, "
            +"so don't just give money but reach out your hand instead."
console.log(statement)

//3
console.log(typeof('10') === typeof("10"))

//4
console.log(Math.ceil(parseFloat('9.8')))

//5
let string1 = "python"
let string2 = "jargon"
let string = "hhhh"
let toFind = "on"

const printer = (...primitive) => console.log(primitive)
printer(string2.search(toFind))
printer(string1.search(toFind))
if ((string1.search(toFind) & string2.search(toFind)) != -1) 
    printer(true);
else
    printer(false);

printer((string1.includes(toFind) && string2.includes(toFind))? true: false)// did i wrote it correct???

//6
string = "I hope this course is not full of jargon."
if (string.includes("jargon"))
    printer(true)

//7
let from0to100 = Math.ceil(Math.random() * 100);
//let from0to100 = Math.floor(Math.random() * 101);
printer(from0to100)

function randomFromTo(min, max){
    return min + Math.floor(Math.random() * (max - min + 1))
}

//8
answer = randomFromTo(50, 100)
printer(answer)
printer(randomFromTo(50, 100))

//9
answer = randomFromTo(0, 255)
printer(answer)

//10
string = "JavaScript"
answer = string.charAt(randomFromTo(0, string.length))
for (let i = 0; i < 50; i++){
    answer = string.charAt(randomFromTo(0, string.length - 1))
    printer(answer)
}
printer(string)
printer(string.length)

//11
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64\n 5 1 5 25 125")

console.log("1 1 1 1 1 \n\
2 1 2 4 8 \n\
3 1 3 9 27 \n\
4 1 4 16 64\n\
5 1 5 25 125"
)

for (let i = 1; i <= 5; i++)
{
    let arr = []
    arr.push(i)
    for (let j = 0; j < 4; j++)
    {
        arr.push(i**j)    
    } 
    console.log(...arr)

}

string = "You cannot end a sentence with because because because is a conjunction"
let toCut = "because"
printer(string.indexOf(toCut), string.lastIndexOf(toCut))
answer = string.substr(string.indexOf(toCut), string.lastIndexOf(toCut) - string.indexOf(toCut) + 1)
printer(answer)
toCut = toCut + " "

printer(`changed primitive toCut: ${toCut}`)
printer(toCut.repeat(3))

answer = string.replace(toCut.repeat(3), "")
printer(answer)