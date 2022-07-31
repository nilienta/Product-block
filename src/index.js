import './index.scss'
import 'normalize.css'

import Sorting from './components/sorting';
import ItemsList from './components/items-list';
import Item from './components/item';
import Cart from './components/cart';
import Sale from './components/sale';

const mocks = [{
	"id": 1,
	"name": "notebook1",
	"price": 100
},
{
	"id": 2,
	"name": "notebook2",
	"price": 200
},
{
	"id": 3,
	"name": "notebook3",
	"price": 300
}]

const sorting = Sorting();
document.body.appendChild(sorting);

let cart = [];

const itemsList = ItemsList();
const {CartElement, updateCart} = Cart(cart);

document.body.appendChild(itemsList);

const generateItems = () => {
	mocks.forEach((item)=>{

		const onAdd = () => {
			cart.push(item);
			updateCart(cart);
		}

		const itemElement = Item(item.name, item.price, onAdd);
		itemsList.appendChild(itemElement);
	})
}


generateItems();

document.body.appendChild(CartElement);

const sale = Sale(5000, 'SALE15');
document.body.appendChild(sale);