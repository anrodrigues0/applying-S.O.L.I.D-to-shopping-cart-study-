
import { Discout } from "./discount";
import { Product } from "./product";
import {ShoppingCartProtocol} from './interface/shopcart-protocol'

export class ShoppingCart implements ShoppingCartProtocol {
    private readonly _item: Product [] = [];

    constructor(private readonly discout?:Discout){}

    addItem(item: Product): void {
        this._item.push(item)
    }

    removeItem(index:number):void {
        this._item.splice(index,1);
    }

    get items():Readonly<Product []> {
        return this._item;
    }

    total():number {
        return +this._item.reduce((total,next) => total + next.price,0).toFixed(2)
    }

    totalWithDiscount(): number {
        if(this.discout?.calculate) {
            return this.discout?.calculate(this.total());
        }
        return this.total()
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo.')
        this._item.length = 0;
    }

    isEmpty(): boolean {
        return this._item.length === 0;
    }

}

