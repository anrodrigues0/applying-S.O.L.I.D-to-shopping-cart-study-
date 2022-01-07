import { Product } from "../product";

export interface ShoppingCartProtocol {
    addItem(item: Product): void 
    removeItem(index:number):void 
    items:Readonly<Product []> 
    total():number 
    totalWithDiscount(): number 
    clear(): void 
    isEmpty(): boolean
}