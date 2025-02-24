const Customer = require('./Customer')

class Auth {
    constructor(){
        this.customers = [];
    }
    register(name, email, shippingAddress){
        this.customers.push(new Customer(name, email, shippingAddress))
    }
    login(email){
        const customer = this.customers.find(customer => customer.email === email);
        if(customer){
            return customer
        }
        return null
    }
}

module.exports = Auth;