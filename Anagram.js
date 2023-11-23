// let stra = "hello";
// let strb = "lloeh";

function sort (strings)
{
    let str = strings.split("");

    for (let i=0; i<=str.length-1; i++)
    {
        for (let j=i+1; j<=str.length-1; j++)
        {
            let ch = str[i];
            let ch1 = str[j];

            if (str[i] > str[j])
            {
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }

    let s = "";
    for (let m=0; m<=str.length-1; m++)
    {
        s = s + str[m];
    }
    return s;
}


if (sort("hello") === sort("oelslh"))
{
    console.log("Anagram");
}
else
{
    console.log("Not anagram");
}