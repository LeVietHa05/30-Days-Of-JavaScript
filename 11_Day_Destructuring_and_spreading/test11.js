
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum

}
let nums = [1, 2, 3, 4, 5, 6]
console.log(sumAllNums(...nums))

let a = "hello1"
let b = 'world'
let c = `${a} - ${b}`
console.log(a, b, c)

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
const newStudent = {...student}

console.log(newStudent)

newStudent.skills.frontEnd.push({ "skill": "Bootstrap", level: 8 })
newStudent.skills.frontEnd.push({ "skill": "Express", level: 9 })


function addSkill(obj, field, skillName, skillLevel) {
    if (skillLevel)
        obj.skills[field].push({ skill: `${skillName}`, level: skillLevel })
    else
        obj.skills[field].push(`${skillName}`)
}

addSkill(newStudent, "dataBase", "SQL", 8)
addSkill(newStudent, "dataScience", "SQL")

console.log(newStudent)
