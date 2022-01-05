import { CartItem } from "../entities/interface/cart-item";

export class Product implements CartItem {
    constructor(public name:string , public price: number){}
}