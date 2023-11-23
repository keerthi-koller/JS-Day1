var readline = require('readline-sync');

let str = readline.question("Enter name : ");

    let s = "";
    for (let i=0; i<=str.length-1; i++)
    {
        s = str.charAt(i) + s;
    }

    console.log(s);