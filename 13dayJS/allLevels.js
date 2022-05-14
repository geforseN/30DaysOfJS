//test
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
)



const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]


//level 1
console.table(countries)  // 1

console.table(users)  // 2


// 3
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()



//level 2
console.assert(10 > 2 * 10, "Wrong: 10 is lower than 10 * 2") // 1
console.warn("This is warn, warn is no good") // 2
console.error("This is error, error is no good")  // 3



// level 3 exercise 1
// while, for, for of, forEach

console.time("           While loop")
let i = 0
while (i < users.length)
{
  console.log(users[i])
  ++i;
}
console.timeEnd("           While loop")


console.time("           For loop")
for (let i = 0; i < users.length; ++i)
{
  console.log(users[i])
}
console.timeEnd("           For loop")

console.time("           For of loop")
for (curUser of users)
{
  console.log(curUser)
}
console.timeEnd("           For of loop")

console.time("           forEach loop")
users.forEach(curUser => console.log(curUser))
console.timeEnd("           forEach loop")
