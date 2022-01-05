 interface CartItem  {
    name: string;
    price: number;
};

type OrderStatus = 'open' | 'closed'

export class ShoppingCart {
    private readonly _item: CartItem [] = [];
    private _orderStatus: OrderStatus =  'open'; //

    addItem(item: CartItem): void {
        this._item.push(item)
    }

    removeItem(index:number):void {
        this._item.splice(index,1);
    }

    get items():Readonly<CartItem []> {
        return this._item;
    }

    //
    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total():number {
        return +this._item.reduce((total,next) => total + next.price,0).toFixed(2)
    }

    //
    sendMessage(msg:string){
        console.log('Mensagem enviada' ,msg)
    }

    //
    saveOrder(): void {
        console.log('Pedido salvo com sucesso')
    }
    
    clear(): void {
        console.log('Carrinho de compras foi limpo.')
        this._item.length = 0;
    }

    isEmpty(): boolean {
        return this._item.length === 0;
    }

    //
    checkout():void {
        if(this.isEmpty()){
            console.log('Seu carrinho esta vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage('Seu pedido foi recebido');
        this.saveOrder();
        this.clear()
    }
}


const cart =  new ShoppingCart();
cart.addItem({name:'blusa', price:59.9})
cart.addItem({name:'blusa 2', price:59.9})
cart.addItem({name:'blusa 3', price:59.9})
cart.checkout()
