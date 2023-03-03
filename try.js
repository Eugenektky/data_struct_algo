let inputString = "aabaa"
let inputString2 = ""
for(let i = inputString.length-1; i>=0; i--){
    inputString2.concat('', inputString.charAt(i))
}

// if(inputString2 === inputString){
//     console.log(inputString2)
//     // return true
// } else if (inputString.length === 1) {
//     console.log(inputString2)
//     // return true
// } else {
//     console.log(inputString2)
//     // return false
// }

