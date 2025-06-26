class PizzaShop {
    constructor(){
        this.orderNumber = 0
        console.log(`SET UP oder ${this.orderNumber}`)
    }
    placeOrder() {
        this.orderNumber = this.orderNumber + 1;
    }
    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}
module.exports = PizzaShop;