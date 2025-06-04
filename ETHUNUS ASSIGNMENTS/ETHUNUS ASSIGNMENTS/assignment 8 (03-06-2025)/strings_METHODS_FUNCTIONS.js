// STRING METHODS


let str = " Hello World "

let trimmed = str.trim()
let upper = str.toUpperCase()
let lower = str.toLowerCase()

console.log("Trimmed/Upper/Lower:", trimmed, upper, lower)

let char = str.charAt(1)
let code = str.charCodeAt(1)
let added = str.concat(" again")

console.log("CharAt/CharCodeAt/Concat:", char, code, added)

let replaced = str.replace("World", "JS")
let replacedAll = str.replaceAll("l", "_")

let sliced = str.slice(1, 6)
let sub = str.substr(1, 4)    // deprecated
let sub2 = str.substring(1, 6)

console.log("Replace/Slice/Substring/Etc:", replaced, replacedAll, sliced, sub, sub2)

let split = str.split(" ")
let i1 = str.indexOf("l")
let i2 = str.lastIndexOf("l")

console.log("Split/IndexOf:", split, i1, i2)

let start = str.startsWith(" He")
let end = str.endsWith(" ")
let has = str.includes("World")

console.log("Starts/Ends/Includes:", start, end, has)

let repeated = str.repeat(2)
let padStart = "5".padStart(4, "0")
let padEnd = "5".padEnd(4, "_")

console.log("Repeat/Pad:", repeated, padStart, padEnd)

let matched = str.match(/l/g)
let allMatches = [...str.matchAll(/l/g)]
let searched = str.search(/o/)

console.log("Match/Search:", matched, allMatches, searched)

let locale = str.toLocaleLowerCase()
let raw = String.raw`New\nLine`

console.log("Locale/Raw:", locale, raw)

let val = str.valueOf()
console.log("ValueOf:", val)
