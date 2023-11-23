var readline = require("readline-sync");

let str = readline.question("Enter string value : ");

str = str.slice(0, str.length-1) + str.charAt(str.length-1).toUpperCase();
console.log(str);


// let s = "";
// for (let i=0; i<=str.length-1; i++)
// {
//     if (i == str.length-1 && (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122))
//     {
//         s = s + str.charCodeAt(str.charCodeAt(i)-32);
//         continue;
//     }

//     if (i == str.length-1)
//     {

//     }
//     s = s + str.charAt(i);
// }

// console.log(s);