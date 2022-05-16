function outerNumber(){
    let number = 0

    function innerPlus(){
        number++
        return number
    }
    function innerMinus(){
        return --number
    }
    function innerSquare(){
        return number*number
    }

    return {
        Plus:innerPlus(), 
        Minus:innerMinus(),
        Square:innerSquare()
    }
}

const inner = outerNumber()

console.log(inner.Plus)
console.log(inner)
console.log(inner.Plus)
console.log(inner.Square)
console.log(inner)