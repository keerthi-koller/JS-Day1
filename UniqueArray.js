var readline = require('readline-sync');

let arr1 = [];
let arr2 = [];
let len1 = readline.question("Enter len1 : ");
let len2 = readline.question("Enter len2 : ");

for (let i=0; i<len1; i++)
{
    let val = readline.question(`Enter ${i} index value : `);
    arr1.push(val);
}
for (let i=0; i<len2; i++)
{
    let val = readline.question(`Enter ${i} index value : `);
    arr2.push(val);
}


let newarr = [];
var k = 0;

for (let i=0; i<=arr1.length-1; i++)
{
    let c = 0;
    for (let j=0; j<=arr1.length-1; j++)
    {
        if (arr1[i] == arr1[j])
        {
            c++;
        }
    }
    if (c == 1)
    {
        newarr[k] = arr1[i];
        k++;
    }
    if (c >= 2)
    {
        newarr[k] = arr1[i];
        k++;
        i++;
    }
}

for (let i=0; i<=arr2.length-1; i++)
{
    let c = 0;
    for (let j=0; j<=newarr.length-1; j++)
    {
        if (arr2[i] == newarr[j])
        {
            c++;
        }
    }
    if (c < 1)
    {
        newarr[k] = arr2[i];
        k++;
    }
}

console.log(newarr);
console.log(newarr.length);

console.log(arr1);
console.log(arr2);
