let num = 1;
if (num > 0) {
    console.log(`${num} is bigger than 0`)
} else if (num < 0) {
    console.log(`${num} is smaller than 0`)
} else {
    console.log(`${num} is zero or it s not a number`)
}


let weather = 'snowy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log(' No need for rain coat.')
}


switch (true) {
    case num > 0:
        console.log(`${num} is bigger than 0`)
        break
    case num < 0:
        console.log(`${num} is smaller than 0`)
        break
    default:
        console.log(`${num} is zero or it s not a number`);
}


let year = 2023;
let month = 2;

if (year % 4 == 0) {
    if (month == 2) return 29

} else {
    if (month == 2) return 28
}


//level3
let month_31 = 'January, March, May, July, August, October, December';
let month_30 = 'April, June, September, November';
let month_2829 = 'February'

let userInput = 'april'
if (month_31.toLowerCase().includes(userInput.toLowerCase())) {
    console.log(`31 days`)
} else if (month_30.toLowerCase().includes(userInput.toLowerCase())) console.log(`30 days`)
else console.log(`28 or 29 days`)