//Different ways of importing from Math.js

// const add = require('./add');
// console.log(add(10,22));

// const obj = require('./Math');
// console.log(obj.add(10,11));
// console.log(obj.sub(22,11));

// console.log("Hello Noman");

//importing json file
const data = require('./user.json');
console.log(data);
console.log(data.name);
console.log(data.address.sector);
