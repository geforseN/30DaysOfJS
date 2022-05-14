import {skills, age, isMarried, student, txt} from "./inputData.js";

//let A = "sasasdad"
//let copyOfA = JSON.parse(JSON.stringify(A))
// console.log(copyOfA)


console.log(skills, typeof skills)  // object
const skills_str = JSON.stringify(skills, undefined, 1) // 1
console.log(skills_str)  

const age_str = JSON.stringify(age) // 2
console.log(typeof age)
console.log(typeof age_str)

const isMarried_str = JSON.stringify(isMarried) // 3
console.log(typeof isMarried)
console.log(typeof isMarried_str)

const student_str = JSON.stringify(student, undefined, 0)   // 4
console.log(typeof student, student)
console.log(typeof student_str, student_str)



// level 2
const studentNeedfulData_str = JSON.stringify(student, ["firstName", "lastName", "skills"], 0)  // 1
console.log(studentNeedfulData_str)



// level 3
const txtObject = JSON.parse(txt) // 
console.log(txtObject, typeof txtObject)
console.log(typeof txt)

// txtObject.
let usersWithSkills = Object.entries(txtObject)
console.log(usersWithSkills.flat(usersWithSkills.every( ([key, value]) => key == "skills" && value.lenght > 1)) )