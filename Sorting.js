let arr = [20, 1, 45, 2, 7, 43];

for (let i=0; i<=arr.length-1; i++)
{
    for (let j=i+1; j<=arr.length-1; j++)
    {
        if (arr[i] > arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    console.log(arr[i]);
}