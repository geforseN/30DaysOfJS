let Test = parseInt("9.8") == 10
console.log("2:", Test, parseInt("9.8"), 10)


Test = typeof "10" == typeof 10
console.log("3:", Test, typeof "10", typeof 10)


let a = 4 > 3 //true
let b = 4 >= 3  //true
let c = 4 < 3  //
let d = 4 <= 3  //
let e = 4 == 4   //true
let f = 4  != '4' //
let g = 4 !== 4  //
let h = 4 == '4'  //true
let i = 4 != 4  //
let j = 4 === '4'   //
let k = 4 === 4    //true
let l = "python".length != "jargon".length  //

console.log("5:", a, b, c, d, e, f, g, h, i, j, k, l)


b = 4 > 3 && 10 < 12  //true
c = 4 > 3 && 10 > 12
d = 4 > 3 || 10 < 12  //true
e = 4 > 3 || 10 > 12 //true
f = !(4 > 3)
g = !(4 < 3) //true
h = !(false) //true
i = !(4 > 3 && 10 < 12)
j = !(4 > 3 && 10 > 12)  //true
k = !(4 === '4')  //true
a = !("dragon".includes("on") && "python".includes('on'))

console.log("6:", b, c, d, e, f, g, h, i, j, k, a)


let T = new Date()
// T = T.getFullYear()
// T = T.toString()
T = T.toDateString()
console.log(T, typeof(T))

T = T.toString()
console.log(T, typeof(T))

T = T.valueOf()
console.log(T, typeof(T))

//T = new T.toTimeString()
//console.log(T, typeof(T))

//T = T.toUTCString()
//console.log(T, typeof(T))

const TIME1 = new Date().toUTCString()
console.log(TIME1, typeof(TIME1))

const TIME2 = new Date().toTimeString()
console.log(TIME2, typeof(TIME2))

//T = T.getFullYear();
//T += T.getMonth();
const TIME = new Date();
let time = TIME.getFullYear();
time += TIME.getMonth();
console.log(time);
