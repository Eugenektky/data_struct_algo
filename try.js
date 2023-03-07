var arg1 = 123
var sum = 0

while(Math.floor(arg1)!==0){
    sum += arg1 % 10
    arg1 = Math.floor(arg1 /= 10)
    if(arg1===0){
        break;
    }
}

console.log(sum)
console.log(arg1)
