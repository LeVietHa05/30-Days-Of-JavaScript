function creatA () {
    let a = 0; 

    function increaseA() {
        a ++;
        return a;
    }

    function desA () {
        a--;
        return a;
    }

    function checkA () {
        if (a > 6) return 1;
        else return 0
    }

    return {
        increaseA: increaseA,
        desA: desA,
        checkA: checkA,
    }
}



module.exports = creatA;

/*
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne,
        minusOne:minusOne,
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.minusOne())



function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
*/