const str = 'I love love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


const cleanPattern = /[^a-zA-Z0-9 ]/g
console.log(sentence.match(cleanPattern))
console.log(sentence.replace(cleanPattern, ''))