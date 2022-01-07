import { CartItem } from "./interface/cart-item";

export class Product implements CartItem {
    constructor(public name:string , public price: number){}
}