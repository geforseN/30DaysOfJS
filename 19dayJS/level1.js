function outerMe(){
    let me = "Me"

    function innerMe(){
        return me += "Amigo"
    }
    return innerMe
}
innerMe = outerMe()

console.log(innerMe())
console.log(innerMe())
console.log(innerMe())