let array = ['java', 'javascript', 'python', 'html', 'css']

let maior = array[0]
let menor = array[0]
arrayLength = array.length

for (index = 1; index < arrayLength; index += 1) {

    if (array[index].length > maior.length) {
        maior = array[index]
    }

    if (array[index].length < menor.length) {
        menor = array[index]
    }
}

console.log(maior)
console.log(menor)