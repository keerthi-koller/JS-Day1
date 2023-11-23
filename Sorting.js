var readline = require('readline-sync');

let len = readline.question("Enter array length : ");

let arr = [];

for (let i = 0; i < len; i++)
{
    let val = readline.question(`Enter ${i} index valu : `);
    arr.push(val);
}

for (let i=0; i<=arr.length-1; i++)
{
    for (let j=i+1; j<=arr.length-1; j++)
    {
        if (Number(arr[i]) > Number(arr[j]))
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr[i]);
}