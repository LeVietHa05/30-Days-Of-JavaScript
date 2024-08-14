function getData() {
    try {
        let info = getName("1234")
        if (!info) {
            throw new Error("fail to load data1 from db")
        } else {
            console.log("success1")
        }
        let info2 = getPhone('123')
        if (!info2) {
            throw new Error("fail to load data2 from db")
        } else {
            console.log("success2")
        }
    } catch (e) {
        console.log(e)
    }
}

console.log("heelo")

function getName(key) {
    let res = Math.random()
    if (res < 0.2) return false
    else return true
}

function getPhone(key) {
    let res = Math.random()
    if (res < 0.4) return false
    else return true
}

getData()


try {
    let firstName
    let lastName = 'Yetayeh'
    if (!firstName || !lastName) {
        throw ("not null")
    }
    let fullName = firstName + ' ' + lastName
    console.log(fullName)
} catch (err) {
    console.log(err)
}