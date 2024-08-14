// 1.9 Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 1; i < 100; i++) {
    if (i == 2 || i == 1) console.log(`${i} la so nguyen to`)
    if (i % 2 == 0) continue;
    let count = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) count++;
        if (count == 2) {
            console.log(`${i} khong la so nguyen to`);
            break;
        }
    }
    if (count == 1) console.log(`${i} la so nguyen to`)
}


//cach khac
function isPrime(a) {
    if (a <= 3) return a > 1
    if (a % 2 == 0 || a % 3 == 0) return false
    let i = 5;
    while (i * i <= a) {
        if (a % i == 0 || a % (i + 2) == 0) {
            return false
        }
        i += 6;
    }
    return true
}

for (let i = 0; i < 101; i++) {
    isPrime(i) ? console.log(i) : null;

}
console.log(1345677655432)
let arr = [1, 2, 3]

for (let num of arr) {
    console.log(num)
}

for (i = 0; i < 10; i++) {
    console.log(i)
}
i = 0;
while (i < 10) {
    i++;
}
let i = 0
do {
    console.log(i)
    i++
}
while (i < 10);

for (let i = 0; i < 10; i++) {
    let str = new Array(i).fill('#').join("")
    // let str = ""
    // for (let y = 0; y < i; y++) {
    //     str += "#"
    // }
    console.log(str)
}

for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + i ** 2)
}
for (let i = 0; i <= 10; i++) {
    console.log(i + '\t' + i ** 2 + '\t' + i ** 3)
}

for (let i = 0; i <= 100; i++) {
    if (i == 1 || i == 2 || i == 3) {
        console.log(i)
        continue
    }
    let count = 0;
    for (y = 2; y < i; y++) {
        if (i % y == 0)
            count++
    }
    if (count == 0)
        console.log(i)
}
let sum = 0;
for (i = 0; i <= 100; i++) { sum = sum + i };
console.log(sum);
let tongle = 0;
let tongchan = 0;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0)
        tongchan = tongchan + i;
    else tongle = tongle + i;
}
console.log("tong cac so chan la" + tongchan);

console.log("tong cac so le la" + tongle);


function randomArr(length, a = 0, b = 5) {
    let output = [] 
    while (output.length !== length) {
        let ran = Math.floor(Math.random() * (b - a + 1)) + a
        if (!output.includes(ran))
            output.push(ran)
    }

    return output
}

console.log(randomArr(6))


function getRandomChar() {
    let random = 0;
    while (!((random < 122 && random > 97) || (random < 90 && random > 65) || (random < 57 && random > 48)))
        random = Math.floor(Math.random() * (122 - 0 + 1)) + 0
    return String.fromCharCode(random)
}
let output = ""
for (let i = 0; i < 6; i++) {
    output += getRandomChar()
}
console.log(output)




function randomChar() {
    let random = 0;
    while (!((random < 122 && random > 97) || (random < 90 && random > 65) || (random < 57 && random > 48)))
        random = Math.floor(Math.random() * (122 - 0 + 1)) + 0
    return String.fromCharCode(random)
}
let numm = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
let ngaunhien = "";
for (let i = 0; i < numm; i++) {
    ngaunhien += randomChar()
}
console.log(ngaunhien)69


