var readline = require('readline-sync');

let len = readline.question("Enter array length : ");

let arr = [];
for (let i = 0; i < len; i++)
{
    let val = readline.question(`Enter ${i} index value : `);
    arr.push(Number(val));
}

let sum = 0;
for (let i=0; i<=arr.length-1; i++)
{
    sum = sum + arr[i];
}

console.log(sum);