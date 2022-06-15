const allH1 = document.getElementsByTagName('h1')

console.log(allH1)
console.log(allH1.length)

console.group('console.log all elemnts by tag h1')
for (const h1 of allH1) 
    console.log(h1)
console.groupEnd()

const firstTitle = document.getElementById('first-title')

console.group('getElementById')
console.log(firstTitle)
console.groupEnd()

let firstTitleByTagName = document.querySelector('h1') // first h1 element

let firstTitleById = document.querySelector('#first-title') // select id first-title    

let firstTitleByClass = document.querySelector('.title') // first element with class title

console.group('querySelector x3')
console.log(firstTitleByTagName, firstTitleById, firstTitleByClass)
console.groupEnd()

const allTitles = document.querySelectorAll('h1')   //  

console.group('querySelectorAll NodeList')
console.log(allTitles)
console.groupEnd()

console.group('querySelectorAll forEach console.log')
allTitles.forEach(title => console.log(title))
console.groupEnd()

console.group('set atributes for fourth element (properties)')
const titles = document.querySelectorAll('h1')
const N = titles.length - 1
console.log('old element', titles[N])   

titles[N].className = 'title'
titles[N].id = 'fourth-title'
console.log('changed element', titles[N]) 
console.groupEnd()

console.group('setAtribute for fourth element')
titles[N].setAttribute('class', 'title')
titles[N].setAttribute('id', 'fourth-title')
console.log(titles[N])
console.groupEnd()

console.group('classList.add    title for fourth elemnt')
console.log("class was title, now 2 classes: title header-title")
titles[N].classList.add('title', 'header-title')
console.log(titles[N])
console.groupEnd()

console.group('classList.remove     title for fourth elemnt')
console.log("class was title header-title, now no class")
titles[N].classList.remove('title', 'header-title')
console.log(titles[N])
console.groupEnd()

titles[N].textContent = 'Fourth Title'

const li = `
<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Ongoing</li>
<li>30DaysOfReact Challenge Coming</li>
<li>30DaysOfFullStack Challenge Coming</li>
<li>30DaysOfDataAnalysis Challenge Coming</li>
<li>30DaysOfReactNative Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>`

const ul = document.querySelector('ul')
ul.innerHTML = li
ul.innerHTML = ''
ul.innerHTML = li + 'newLine' + li

titles.forEach((title, index) => {
    title.style.margin = '0px'
    title.style.marginBottom = '10px'
    title.style.padding = '8px'

    if (index % 2 === 0){
        title.style.fontSize = '48px'
        title.style.color = 'green'
        title.style.backgroundColor = 'grey'   
    } 
    else  
    {
        title.style.fontSize = '36px'
        title.style.color = 'yellow'
        title.style.backgroundColor = 'black'
    }   
})




