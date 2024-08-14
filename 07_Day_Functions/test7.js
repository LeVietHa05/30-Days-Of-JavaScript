(function  () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
})();


function  solveLinEquation (a,b,c, x) {
    let y = (-c -a * x ) / b
    return y
}

console.log(solveLinEquation(1,1,-2,1))