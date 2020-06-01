// See this in the console to make sure the project is wired up correctly
console.log('The project is UP')

// STEP 1- console.dir document and study it

// STEP 2- Grab the Lambda Cat heading in the console. Access the following:
//  - the .id
//  - the .classList
//  - the data inside a data-attribute using .dataset
//  - the text content using .textContent
//  - any attribute using .getAttribute('id') // example using id
const firstTitle = document.querySelector('h2')
console.log(firstTitle.id) // to find out the id
firstTitle.id = 'theId' // setting an id

console.log(firstTitle.className) // to read all class names as a single string
console.log(firstTitle.classList) // to obtain a list of strings
firstTitle.className = 'card-title alert' // sets all the class names
firstTitle.classList // lists all the class names
firstTitle.getAttribute('class') // lists all the class names
firstTitle.textContent = 'The New Title' // setting new text content for this element

// STEP 3- find the body of the document in the DOM and find:
//  - Its parentElement
//  - Its firstElementChild
//  - Its firstElementChild's nextSibling element
const theBody = document.body
const theParentOfBody = theBody.parentElement
console.log('the parent of body', theParentOfBody)

const theFirstChildOfBody = theBody.firstElementChild
console.log('the first child', theFirstChildOfBody)

const theSiblingOfFirstChildOfBody = theFirstChildOfBody.nextElementSibling
console.log('the sibling', theSiblingOfFirstChildOfBody)

// STEP 4- find the Lambda Cat heading with firstElementChild and nextSibling

// STEP 5- find the children of the nav, convert it into a real array
const theNav = document.querySelector('nav')
console.log('the nav', theNav)
const childrenOfNav = theNav.children
console.log('childrenOfNav', childrenOfNav)

const firstLink = childrenOfNav[0]
console.log(firstLink, 'firsLink')
firstLink.href = 'https://google.com'
firstLink.textContent = 'THE NICE HOME LINK'

const allNodesInsideNav = theNav.childNodes
console.log('allNodesInsideNav', allNodesInsideNav)

// STEP 6- NO CSS SELECTOR - find the following elements or groups of elements:
//  - all the divs in the page
const allDivs = document.getElementsByTagName('div')
console.log(allDivs)

//  - all elements with a className of 'card'
//  - the element with an id of 'mainNav'
const allLinks = document.getElementsByTagName('a') // [COLLECTION]
const allCards = document.getElementsByClassName('card') // [COLLECTION]
const logoTitleOld = document.getElementById('logo-title') // [SINGLE ELEMENT]

const h1 = document.getElementById('logoTitle')
console.log('heading', h1)
h1.textContent = 'Dogs'

// STEP 7- do the same, but using CSS selectors
const logoTitle = document.querySelector('#logo-title') // [SINGLE ELEMENT]
const anchorTagsNav = document.querySelectorAll('nav a') // [COLLECTION]

const nav = document.querySelector('nav') // [SINGLE ELEMENT]
const linksfromNav = nav.querySelectorAll('a') // [COLLECTION]

// STEP 8- use setAttribute to change an attribute of an element
// .id
// .src
const secondCardImage = document.querySelector('.card:nth-of-type(2) img')
console.log(secondCardImage)

// secondCardImage.src = 'url'
secondCardImage.setAttribute('src', 'https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg')

// const secondImageAlternate = document.querySelectorAll('.card img')[1]
// console.log(secondImageAlternate)

const secondCard = document.querySelector('.card:nth-of-type(2)')
secondCard.querySelector('img')

// STEP 9- use style to change inline styles of an element
//  - make the first h3 subheading be a different color
const firstH3 = document.querySelector('h3')
firstH3.style.color = 'red'
//  - make all the h3 subheadings be a different color using a loop
const allH3s = document.querySelectorAll('h3')

// no map on NodeLists nor HTMLCollection
allH3s.forEach(heading => {
  heading.style.color = 'green'
})

const allH3sToArray = Array.from(allH3s)

// STEP 10- use classList to add, remove and toggle a class name
//  - remove the 'extra-stuff' class name from the last paragraph
const paragraphLastCard = document.querySelector('.card:nth-of-type(4) p')
paragraphLastCard.classList.remove('extra-stuff')
//  - add it to the first paragraph
document.querySelector('.card:nth-of-type(1) p').classList.add('extra-stuff')
//  - toggle it in the second paragraph

// STEP 11- get a collection of h2s and loop over them setting text content from cardTitles
const cardTitles = {
  cardTitle1: 'Cats Are the Supreme Rulers',
  cardTitle2: 'Cats Rule Dogs Drool',
  cardTitle3: 'Give Me All the Belly Rubs',
  cardTitle4: 'I Haz CheeseBurger',
}
const theTitlesArray = Object.values(cardTitles)
const allH2s = document.querySelectorAll('.card h2')

for (let i = 0; i < allH2s.length; i++) {
  allH2s[i].textContent = theTitlesArray[i]
}

// STEP 12- create a new link and append it to the main nav
const newLinkProps = {
  href: '#',
  textContent: 'Site Map',
  className: 'menu-item',
}
const newlink = document.createElement('a')

newlink.href = newLinkProps.href
newlink.textContent = newLinkProps.textContent
newlink.classList.add(newLinkProps.className)

nav.appendChild(newlink)
