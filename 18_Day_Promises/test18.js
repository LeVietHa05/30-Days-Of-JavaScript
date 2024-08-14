

console.log("hello 1")
setTimeout(() => {
    console.log("hello 2")
}, 1000)
console.log("hello 3")

function a() {
    return "b"
}


const square = async function (n) {
    return n * n
}

let x
async function getSquare() {
    x = await square(2)

    console.log(x)
}

// getSquare()


async function getLanguage(url) {
    let res = await fetch(url);
    let data = await res.json();
    let languages = []
    // console.log(data)
    data.forEach(country => {
        let eachLangCountry = country.languages.map(e => { return e.name })
        languages.push(eachLangCountry)
    })
    languages = languages.flat();
    let langSet = new Set(languages)
    console.log(languages)
    console.log(langSet)
}

getLanguage('https://restcountries.com/v2/all')


console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
//Callback
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)


// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (Math.random() > 0.5) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))


const square1 = async function (n) {
    return n * n
}
async function a() {
    let res = await square1(2)
    console.log(res)
}

a();
const obj = {
    "a b c": "123"
}
obj["a b c"]


//level 3 
//ex1
const url = 'https://api.thecatapi.com/v1/breeds'
const bai3_1 = async function (url) {

    let sumMin = 0;
    let sumMax = 0;

    let a = await fetch(url)
    let cats = await a.json();
    for (let cat of cats) {
        sumMin += parseInt(cat.weight.metric.slice(0, 2));
        sumMax += parseInt(cat.weight.metric.slice(-2));
        console.log(parseInt(cat.weight.metric.slice(-2)))
    }
    console.log(sumMin / cats.length, sumMax / cats.length)
}
bai3_1(url)