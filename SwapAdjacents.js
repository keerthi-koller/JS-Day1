let arr = [1, 2, 3, 4, 5, 6];

for (let i=0; i<=arr.length-1; i=i+2)
{
    for (let j=i+1; j<=i+1; j++)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

console.log(arr);