// Fundamentals of arrays and array methods


// NOTE: The methods below modify the original array
// -------------------------------------------------

// PUSH: add an element to the end of the array
let arr1 = ['a', 'b', 'c', 'd']
arr1.push('e')
console.log(arr1)


// UNSHIFT: add an element to the beginning of an array
let arr2 = ['b', 'c', 'd']
arr2.unshift('a')
console.log(arr2)


// POP: remove an element from the end of an array
let arr3 = ['a', 'b', 'c', 'd']
arr3.pop()
console.log(arr3)


// SHIFT: remove an element from the beginning of the array
let arr4 = ['a', 'b', 'c', 'd']
arr4.shift()
console.log(arr4)


// SPLICE: add or remove an element at a specific index in the array. parameters = (start, deleteCount, item1, item2, itemN)
let arr5 = ['a', 'b', 'd', '20']
// add c at index 2
arr5.splice(2, 0, 'c')
// delete 20 at the end of the array
arr5.splice(4, 1)
console.log(arr5)


// SORT: sorts and changes the original array depending on the sort return value
let arr6 = [4,8,3,2,17,25,12,9]
// sort the array in numerical ascending order
arr6.sort((a, b) => a - b)
console.log(arr6)
// sort the array in numerical descending order
arr6.sort((a, b) => b - a)
console.log(arr6)

// sort the clubs array by least to most members
let clubs = [{name: 'chess', members: 12}, {name: 'basketball', members: 25}, {name: 'arts&crafts', members: 8}, {name: 'music', members: 20}]
clubs.sort((a, b) => a.members - b.members)
console.log(clubs)




// NOTE: The methods below do not modify the original array
// --------------------------------------------------------

// SLICE: returns a piece of the original array. parameters = (start) or (start, end)
let arr7 = ['a', 'b', 'c', 'A', 'B', 'C']
let allCaps = arr7.slice(3)
let allLower = arr7.slice(0, 3)
console.log(allCaps)
console.log(allLower)


// FILTER: filters an array and returns the result as a new array
let arr8 = [1, 2, 3, 'd', 4, 'f', 'g', 5, 'i', 'j']
let onlynums = arr8.filter((element) => !isNaN(element))
console.log(onlynums)

let cities = [{name: 'New York', population: 8000000}, {name: 'Sacramento', population: 524943}, {name: 'Chicago', population: 2700000}] 
let overOneMillion = cities.filter((city) => city.population > 1000000)
console.log(overOneMillion)


// MAP: creates a new array with the return values of a function that is executed against each element in the original array
// map over the 'over one million' array made above and return the names of those two cities as a new array
let biggestCities = overOneMillion.map((city) => city.name)
console.log(biggestCities)


// CONCAT: concatonates two arrays together 
let arr9 = ['hello,', 'how']
let arr10 = ['are', 'you?']
let sentence = arr9.concat(arr10)
console.log(sentence)


// JOIN: joins all elements in an array together and returns it as a string. parameter = (separator)
// joins all the elements of the sentence array above together with a space in between each element
let sentenceString = sentence.join(' ')
console.log(sentenceString)


//FOREACH: run a function against every value in the array
let names = ['Jill', 'Chris', 'Leon']
names.forEach(name => console.log(name))






