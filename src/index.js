import './index.scss'
import 'normalize.css'

import Modal from './components/modal';
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

const flexBox = document.createElement('div');
flexBox.classList.add('flex-box');
document.body.appendChild(flexBox);

const sorting = Sorting();
flexBox.appendChild(sorting);

const stock = document.createElement('div');
stock.classList.add('stock');
const modal = Modal();
const stockBall = document.createElement('div');
stockBall.classList.add('stock__ball');

stock.append(modal, stockBall);

flexBox.appendChild(stock);

const itemsList = ItemsList();
document.body.appendChild(itemsList);

let cart = [];
const {CartElement, updateCart} = Cart(cart);

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