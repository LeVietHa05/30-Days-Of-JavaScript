
const id = setInterval(() => { console.log("hello 1") }, 1000);
setTimeout(() => { clearInterval(id) }, 5000);
console.log("hello 2")


const numbers = [1, 2, 3, 4, 5];
let num2 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }]
let sum = 0;
numbers.forEach((e) => {
    sum += e
})

console.log(num2.reduce((sum, cur) => {
    return sum + cur.a
}, 0))

let power2Numbers = numbers.map((e) => {
    if (e > 2) return e ** 2
})

let filteredNums = numbers.filter((e) => e > 2)
console.log(filteredNums)
let power2morethan2nums = numbers.filter((e) => e > 2).map(e => e ** 2)
console.log(power2morethan2nums)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 1]
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => b === true)

console.log(areSomeTrue) //true
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // fals

const countries = require('./09_day_starter/data/countries_data.js')
// console.log(countries[0])
function mostPopulatedCountries(arr, num) {
    return arr.map(e => {
        return {
            country: e.name,
            population: e.population
        }
    }).sort((a, b) => {
        return b.population - a.population
    }).slice(0, num)
}

function mostSpokenLanguages(arr, num) {
    let output = []
    let temp = {}
    arr.forEach(e => {
        e.languages.forEach(i => {
            if (!temp[i]) temp[i] = 1;
            else temp[i]++
        })
    })
    for (lang in temp) {
        output.push({ lan: lang, count: temp[lang] })
    }
    return output.sort((a, b) => b.count - a.count).slice(0, num)
}
console.log(mostSpokenLanguages(countries, 10))
console.log(mostPopulatedCountries(countries, 3))

let nums = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }]

let b = nums.reduce((s, c) =>
    s + c.a
    , 0)
console.log(b) 