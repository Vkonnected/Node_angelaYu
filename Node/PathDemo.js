const path = require("node:path");
console.log(__filename);
console.log(__dirname);

// console.log(path.basename(__filename));  // TODO:: Not recognized
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));  // TODO:: Not recognized
// console.log(path.extname(__dirname));

// const ref = path.parse(__filename);
// console.log(ref);  // TODO:: Not recognized
// console.log(ref.base);
// console.log(path.format(ref));

console.log(path.isAbsolute(__filename));

console.log(path.join('folder1', 'folder2', 'noman.html'));
console.log(path.join('/folder1', 'folder2', 'noman.html'));
console.log(path.join('/folder1', 'folder2', 'noman.html'));
console.log(path.join('/folder1', '//folder2', '../noman.html'));