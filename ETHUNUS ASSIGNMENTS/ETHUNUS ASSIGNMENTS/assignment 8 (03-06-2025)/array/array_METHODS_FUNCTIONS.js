// ARRAY METHODS


let arr = [1, 2, 3, 4, 5]

arr.push(6)
arr.unshift(0)
arr.pop()
arr.shift()

console.log("Push/Unshift/Pop/Shift:", arr)

arr.splice(2, 1)
arr.splice(1, 0, 99)
let part = arr.slice(1, 4)
console.log("Splice and Slice:", arr, part)

let combined = arr.join(' - ')
console.log("Joined:", combined)

let reversed = [...arr].reverse()
let sorted = [...arr].sort()
console.log("Reversed:", reversed)
console.log("Sorted:", sorted)

let doubled = arr.map(x => x * 2)
let even = arr.filter(x => x % 2 === 0)
let sum = arr.reduce((a, b) => a + b)

console.log("Map/Filter/Reduce:", doubled, even, sum)

let found = arr.find(x => x > 2)
let index = arr.findIndex(x => x > 2)
console.log("Find + FindIndex:", found, index)

let allPositive = arr.every(x => x > 0)
let someOver4 = arr.some(x => x > 4)
console.log("Every/Some:", allPositive, someOver4)

let check = arr.includes(3)
let idx = arr.indexOf(3)
let lastIdx = arr.lastIndexOf(3)

console.log("Includes/IndexOf/LastIndexOf:", check, idx, lastIdx)

let deep = [1, [2, [3, 4]]]
let flat = deep.flat(2)
let flatMapped = arr.flatMap(x => [x, -x])
console.log("Flat & FlatMap:", flat, flatMapped)

let filled = new Array(4).fill("x")
let fromStr = Array.from("hi!")
let isArr = Array.isArray(arr)
let spreadCopy = [...arr]

console.log("Fill/From/IsArray/Spread:", filled, fromStr, isArr, spreadCopy)
