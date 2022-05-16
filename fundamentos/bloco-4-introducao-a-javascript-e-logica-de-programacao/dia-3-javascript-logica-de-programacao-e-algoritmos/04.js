let number = 50
let divCounter = 0
let higherNumber = ''

for (index = 2; index <= number; index += 1) {

    for (index2 = 1; index2 <= number; index2 += 1) {

        if (index % index2 === 0) {
            divCounter += 1
        }

    }
    if (divCounter === 2) {
        higherNumber = index
    }
    divCounter = 0
}

console.log(higherNumber)
