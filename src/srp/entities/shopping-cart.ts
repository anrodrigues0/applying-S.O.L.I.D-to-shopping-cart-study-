
import { Product } from "./product";

export class ShoppingCart {
    private readonly _item: Product [] = [];

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
    
    clear(): void {
        console.log('Carrinho de compras foi limpo.')
        this._item.length = 0;
    }

    isEmpty(): boolean {
        return this._item.length === 0;
    }

}

