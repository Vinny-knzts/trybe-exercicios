let word = 'tryber'

wordLength = word.length
let wordInverted = ''

for (let index = wordLength - 1; index >= 0; index -= 1) {
    wordInverted += (word[index])
}

console.log(wordInverted)