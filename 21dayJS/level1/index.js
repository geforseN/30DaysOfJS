//  1

const firstParagraph = document.querySelector('p')
console.log(firstParagraph)

//  add class and id
const HTMLp = document.querySelectorAll('p')
console.log(HTMLp)
HTMLp.forEach((p, index) => {
    p.className = `classNumber${index + 1}`
    p.id = `id-${index + 1}`
})


//  2
const allParagraphs = document.querySelector('#id-1')
console.log(allParagraphs)

