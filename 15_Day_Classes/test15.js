class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
        this.skills = []
        console.log(this) // Check the output from here
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }

    get getScore() {
        return this.score
    }
    /**
     * @param {() => { (arg0: number): any; new (): any; }} val
     */
    set setScore(val) {
        this.score = val
    }
    static tets() {
        console.log("abc")
        return "1"
    }
}

class Male extends Person {
    constructor(firstName, lastName, gender = "male") {
        super(firstName, lastName)
        this.gender = gender
    }

    get getGender() {
        console.log("abc")
        return this.gender
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName + ": " + this.gender
    }

}

const person1 = new Male("le ", " ha")
const person2 = new Person("le1 ", " ha2")

console.log(person1)

// const male1 = new Male("le ", "ha")
// console.log(male1.getGender)
// console.log(male1.getFullName())


class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        return "MOOOOO"
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeNoise() {
        return "Bark"
    }
}

const dog1 = new Dog("Brian")

console.log(dog1.makeNoise())



class Statitics {
    constructor() {
        this.ages = [];
    }
    push(...age) {
        age.forEach((e) => this.ages.push(e))
        this._sum = this.sum();
        this._mean = this.mean();
        this._variance = this.variance()
    }
    pop(...age) {
        age.forEach((e) => this.ages.pop(e))
        this._sum = this.sum();
        this._mean = this.mean();
        this._variance = this.variance()
    }
    count() {
        this._len = this.ages.length
        return this._len
    }
    sum() {
        return this.ages.reduce((sum, cur) => sum + cur, 0)
    }
    getSum() {
        return this._sum
    }
    min() {
        return this.ages.sort()[0]
    }
    max() {
        return this.ages.sort()[this.count() - 1]
    }
    range() {
        return this.max() - this.min()
    }
    mean() {
        return Math.round(this.getSum() / this.count())
    }
    getMean() {
        return this._mean;
    }
    median() {
        return this.ages.sort()[parseInt(this.count() / 2)]
    }
    mode() {
        const map = new Map()
        let mode = { mode: 0, count: 0 }
        this.ages.map((age, index) => {
            if (!map.has(age)) {
                map.set(age, 1)
            } else {
                map.set(age, map.get(age) + 1)
                if (map.get(age) > mode.count) {
                    mode.mode = age;
                    mode.count = map.get(age)
                }
            }
        })
        return mode
    }
    variance() {
        let vari = this.ages.reduce((vari, cur) =>
            vari += (cur - this._mean) ** 2,
            0
        )
        vari /= this.count();
        return vari
    }

    getVari() {
        return this._variance
    }

    stdDeviation() {
        return Math.sqrt(this._variance)
    }
    fredDistribution() {
        const map = new Map()
        let fredDis = []
        this.ages.map((age, index) => {
            if (!map.has(age)) {
                map.set(age, 1 / this._len * 100)
            } else {
                map.set(age, map.get(age) + 1 / this._len * 100)

            }
        })
        fredDis = map.entries()
        console.log(fredDis)
    }
}


let ages = new Statitics();
ages.push(31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26)
console.log(ages.fredDistribution())