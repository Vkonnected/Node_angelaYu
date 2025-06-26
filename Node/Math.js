//Different ways of import export in index.js

// const add = (a,b) => a + b;
// module.exports = add;


// module.exports = (a,b) => a + b;


const   add = (a,b) => {
return a + b;
}
const sub = (a,b) => a - b;
module.exports = {
    // add: add 
    // sub: sub
    add,
    sub
}
