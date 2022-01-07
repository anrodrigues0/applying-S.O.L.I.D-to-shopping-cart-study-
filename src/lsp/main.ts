/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
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
