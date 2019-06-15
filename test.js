let randStr = require('random-string-generator-mi');

const uniqueStr = randStr.generateString('prefix','suffix');
const decodeStr = randStr.decodeUniqueString(uniqueStr)

console.log("Unique String >>>", uniqueStr)
console.log("decode String >>>", decodeStr)
