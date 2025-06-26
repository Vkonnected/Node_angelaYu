const fs = require("node:fs")

setTimeout(() => console.log('from timeout'), 0)

fs.readFile(__filename, () => {
    console.log("This is readfile");
})