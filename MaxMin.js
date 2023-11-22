let arr = [1, 22, 0, 4, 5];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }

    if (arr[i] < min)
    {
        min = arr[i];
    }
}

console.log(max);
console.log(min);