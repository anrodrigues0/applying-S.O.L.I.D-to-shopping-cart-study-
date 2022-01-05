import { Message } from "./services/message";
import { Order } from "./entities/order";
import { Persistence } from "./services/persistence";
import { ShoppingCart } from "./entities/shopping-cart";
import { Product } from "./entities/product";

const cart =  new ShoppingCart();
const order =  new Order(cart,new Message,new Persistence)
cart.addItem(new Product('blusa',59.9))
cart.addItem(new Product('blusa 1',79.9))
cart.addItem(new Product('blusa 2',59.9))

order.checkout()
