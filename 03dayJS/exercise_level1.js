let challenge = "30 Days of JavaScript"

const printer = (...primitive) => console.log(primitive)

printer(challenge)
//14
function findCharAt(string, symbol){
    console.log("symbol =", symbol)
    for (let i = 0; i < challenge.length; i++)
    {   
        if (string.charAt(i) == symbol)
            return i;
    }
}

printer(challenge.search("J"))
let answer = findCharAt(challenge, "J")
printer(answer)
printer(challenge.charAt(answer))
printer(challenge.charCodeAt(answer))

//15
answer = challenge.indexOf('a')
printer(answer)

//16
answer = challenge.lastIndexOf("a")
printer(answer)

//17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
answer = sentence.indexOf("because")
printer(answer)

//18
answer = sentence.lastIndexOf("because")
printer(answer)

//19
answer = sentence.search("because")
printer(answer, "19")

//20
sentence = ' 30 Days Of JavaScript '
answer = sentence.trim()
printer(answer)
printer(sentence)

//21
sentence = answer
printer(sentence.startsWith("30 Days"), sentence.startsWith("30 days"))

//22
printer(sentence.endsWith("JavaScript"), sentence.endsWith("Java"))

//23
sentence = sentence.concat(" A  AA")
answer = sentence.match("a")
printer(answer)
answer = sentence.match(/a/gi)
printer(answer)

//24
sentence = ""
sentence = sentence.concat("30 Days of ", "JavaScript")
printer(sentence)

nextSentence = ""
nextSentence.concat(nextSentence, "30 Days of ", "JavaScript")
printer(nextSentence)

nextSentence.concat(sentence)
printer(nextSentence)

nextSentence = nextSentence.concat(sentence)
printer(nextSentence)

//25
printer(sentence = sentence.repeat(2))
printer(sentence)


