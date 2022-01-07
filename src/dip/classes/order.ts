import { OrderStatus } from "./interface/order-status";
import { OrderCustomer } from "./interface/customer-protocol";
import { ShoppingCartProtocol } from "./interface/shopcart-protocol";
import { MensageProtocol } from "./interface/message-protocol";
import { PersistenceProtocol } from "./interface/persistence-protocol";

export class Order {
    private _orderStatus: OrderStatus =  'open'; //
    constructor (
       private readonly cart: ShoppingCartProtocol,
       private readonly message: MensageProtocol,
       private readonly persistence: PersistenceProtocol,
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