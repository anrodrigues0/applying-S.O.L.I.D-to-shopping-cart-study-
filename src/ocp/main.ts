/*
Open/closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação.
*/

import { Message } from "./services/message";
import { Order } from "./classes/order";
import { Persistence } from "./services/persistence";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import {TenPorcentDiscount} from './classes/discount'

const cart =  new ShoppingCart(new TenPorcentDiscount);
const order =  new Order(cart,new Message,new Persistence)
cart.addItem(new Product('blusa',59.9))
cart.addItem(new Product('blusa 1',79.9))
cart.addItem(new Product('blusa 2',59.9))
order.checkout()
