let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 5, 4, 7, 8, 9];
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