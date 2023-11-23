let str = "hello world hello hi";

let arr = str.split(" ");
let s = "";

for (let i=0; i<=arr.length-1; i++)
{
    for (let j=i+1; j<=arr.length-1; j++)
    {
        if (arr[i] == arr[j])
        {
            arr[j] = "";
        }
    }
    s = s + arr[i] + " ";
}

console.log(s);