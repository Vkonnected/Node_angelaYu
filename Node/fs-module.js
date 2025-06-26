const fs = require("node:fs");
console.log('first');
console.log('1st');
const save = fs.readFileSync("./data.txt");
console.log(save);

console.log(save.toString());
console.log('2nd');

fs.readFile("./data.txt" , "utf-8", (error, data) => {
if (error) {
    console.log(error);
} else {
    console.log(data);
}
});

console.log('3')
