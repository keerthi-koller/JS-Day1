var readline = require("readline-sync");

let len = readline.question("Enter array length : ");

let arr = [];
for (let i = 0; i < len; i++) {
  let val = readline.question(`Enter ${i} index value : `);
  arr.push(val);
}

for (let i = 0; i < arr.length; i = i + 2) {
  for (let j = i + 1; j <= i + 1; j++) {
    if (j == arr.length) {
      arr[i] = arr[j-1];
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);
