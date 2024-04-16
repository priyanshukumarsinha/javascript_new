const newString = new String("Rockstar's GTA VI")

console.log(newString[5]);
console.log(newString.length);

console.log(newString.anchor("gameName")); //instead of using this we use createElement method to do the same

console.log(newString.at(-1)) // same as charat, but it also takes -ve indexes

console.log(newString.big()) //instead of this we do it using DOM manipulation

console.log(newString.blink())

console.log(newString.bold())

console.log(newString.charAt(-1)) // returns nothing

console.log(newString.charCodeAt(6)) // returns ascii code

console.log(newString.codePointAt(5)) // returns code points

console.log(newString.concat(" Yeah"))

console.log(newString.endsWith('VI'))

console.log(newString.fontcolor("Black"))
console.log(newString.fontsize("64"))

console.log(String.fromCharCode('97')) //forms a string from ascii codes
console.log(String.fromCodePoint('97')) //forms a string from code points

console.log(newString.includes('VI'))

console.log(newString.indexOf('G', 12)) // returns -1 if not found
console.log(newString.isWellFormed()) //checks for lone surrogates

console.log(newString.italics())
console.log(newString.lastIndexOf('r'))

console.log(newString.link("github.com"))

console.log(newString.localeCompare("a")) //compares locale

console.log(newString.match("VI")) //[ 'VI', index: 15, input: "Rockstar's GTA VI", groups: undefined ]

console.log(newString.matchAll("VI")[0])

console.log(newString.normalize())

console.log(newString.padEnd(20, "-")) //Rockstar's GTA VI---
console.log(newString.padStart(20, "-")) // ---Rockstar's GTA VI

const newStringOne = String.raw `Hello \nWorld`

console.log(newStringOne)

console.log(newString.repeat(10))
console.log(newString.replace('VI', 'V'))
console.log(newString.search('V'))
console.log(newString.slice(11,14))
console.log(newString.small())
console.log(newString.split(" ")) // [ "Rockstar's", 'GTA', 'VI' ]

console.log(newString.startsWith('Rockstar'))
console.log(newString.strike())
console.log(newString.sub())
console.log(newString.substr(1,2)) // oc
console.log(newString.substring(1,3)) // oc

console.log(newString.sup())

console.log(newString.toLocaleLowerCase())
console.log(newString.toLocaleUpperCase())

console.log(newString.toLowerCase())
console.log(newString.toUpperCase())

const num = 5545
console.log(num.toString())
console.log(newString.toWellFormed())

console.log(newString.trim())
console.log(newString.trimEnd())
console.log(newString.trimStart())

console.log(newString.valueOf())








