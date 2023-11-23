var readline = require("readline-sync");

let str1 = readline.question("Enter string str1 :");
let str2 = readline.question("Enter string str2 :");

    if (sort(str1) === sort(str2))
    {
        console.log("Anagram");
    }
    else
    {
        console.log("Not anagram");
    }


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