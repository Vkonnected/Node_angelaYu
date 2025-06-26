// const eventEmitter = require ("node:events");
// const emitter = new eventEmitter();

// emitter.on("Order-Pixxa", (size, toppping) => {
//     if (size === 'large') {
//         console.log(`Drinks free!`);
//     }
//     console.log(`order Pixxa recieved of ${size} piozza with ${toppping}, baking...`);
// });

// emitter.emit("Order-Pixxa", "large", "Chicken");

const PizzaShop = require("./pizza-shop");
const pizzaShop = new PizzaShop();
pizzaShop.placeOrder();
pizzaShop.displayOrderNumber();