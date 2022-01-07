/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Message } from "./services/message";
import { Order } from "./classes/order";
import { Persistence } from "./services/persistence";
import { ShoppingCart } from "./classes/shopping-cart";
import { Product } from "./classes/product";
import {TenPorcentDiscount} from './classes/discount'
import {IndividualCustomer} from './classes/customer'

const cart =  new ShoppingCart(new TenPorcentDiscount);
const customer = new IndividualCustomer('Andry' , '012354' ,' 0000000000')
const order =  new Order( 
    cart,
    new Message,
    new Persistence,
    customer
)

cart.addItem(new Product('blusa',59.9))
cart.addItem(new Product('blusa 1',79.9))
cart.addItem(new Product('blusa 2',59.9))
order.checkout()
