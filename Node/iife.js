(function() {
    const superHero = 'Thor';
    console.log(superHero);
}) ();

(function() {
    const superHero = 'Loki';
    console.log(superHero);
}) ();

//IIFE is Immediately invoked function expression which takes 5 arguments by default
//Above function works actually like this and can be seen while running the debugger
// (function(module, exports,require, __dirname, __filename) {
//     const superHero = 'Loki';
//     console.log(superHero);
// }) ();