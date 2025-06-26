// require('./add');
// console.log('Hello Node');


// const addFn = require('./Add');
// console.log("Hello Node");
// const sum = addFn(10,33);
// console.log(sum);
// const sum2 = addFn(1,4);
// console.log(sum2);


// require('./Thor.js');
// require('./Loki.js');
// console.log("Hello Node");

// const superHero = require('./superHero');
// console.log(superHero.getName());
// superHero.setName('Thor');
// console.log(superHero.getName());
// const superHero2 = require('./superHero');
// console.log(superHero2.getName());  //It gives the name thor as the instance has been cached

//To avoid cahching issues , make new instances everytime.
const superHero = require('./superHero');
const ref1 = new superHero('Loki');
console.log(ref1.getName());
ref1.setName('Thor');
console.log(ref1.getName());
const superHero2 = require('./superHero');
const ref2 = new superHero2('Iron Man');
console.log(ref2.getName());





