class Customer{
    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.shippingAddress = address;
        this.orderHistory = []
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart)
    }
}

module.exports = Customer;