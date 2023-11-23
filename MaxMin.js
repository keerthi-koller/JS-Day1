var readline = require("readline-sync");

let len = readline.question("Enter array length : ");

let arr = [];
for (let i=0; i<len; i++)
{
    let val = readline.question(`Enter ${i} index value : `);
    arr.push(val);
}

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
}

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] < min)
    {
        min = arr[i];
    }
}

console.log("max val is " + max);
console.log("min val is " + min);