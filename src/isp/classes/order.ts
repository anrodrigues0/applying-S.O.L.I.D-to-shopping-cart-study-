import { OrderStatus } from "./interface/order-status";
import { Message } from "../services/message";
import { Persistence } from "../services/persistence";
import { ShoppingCart } from "./shopping-cart";
import { OrderCustomer } from "./interface/customer-protocol";

export class Order {
    private _orderStatus: OrderStatus =  'open'; //
    constructor (
       private readonly cart: ShoppingCart,
       private readonly message: Message,
       private readonly persistence: Persistence,
       private readonly customer: OrderCustomer
    ){}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout():void {
        if(this.cart.isEmpty()){
            console.log('Seu carrinho esta vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.message.sendMessage(`Seu pedido foi recebido total: ${this.cart.totalWithDiscount()}`);
        this.persistence.saveOrder();
        this.cart.clear()
        console.log(`O Cliente é : ${this.customer.getName()} ${this.customer.getIDN()}`);
    }
}