let str = "Hello  d  World";
let c = 0;

for (let i=0; i<=str.length-1; i++)
{
    if (str.charAt(i) == ' ')
    {
        continue;
    }
    c++;
}

console.log(c);