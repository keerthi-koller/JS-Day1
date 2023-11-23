var readline = require("readline-sync");

let len = readline.question("Enter array length");
let arr = [];


for (let i=0; i<len; i++)
{
    let val = readline.question(`enter ${i} index value :`);
    arr.push(val);
}

console.log(arr);
