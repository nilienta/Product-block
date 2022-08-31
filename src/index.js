import './index.scss';
import 'normalize.css';

import Mocks from '../data.json' assert { type: 'json' };

import Sorting from 'component/sorting';
import Modal from 'component/modal';
import ItemsList from 'component/items-list';
import Item from 'component/item';
import Cart from 'component/cart';
import Sale from 'component/sale';

const mocks = Mocks.laptops;

const headerCatalog = document.createElement('div');
headerCatalog.classList.add('headerCatalog');
document.body.appendChild(headerCatalog);

const sorting = Sorting();
headerCatalog.appendChild(sorting);

const stock = document.createElement('div');
stock.classList.add('stock');
const modal = Modal();
const stockBall = document.createElement('div');
stockBall.classList.add('stock__ball');

stock.append(modal, stockBall);
headerCatalog.appendChild(stock);

const itemsList = ItemsList();
document.body.appendChild(itemsList);

const itemsCart = [];
// возвращает две функции с их return в виде значений
const { CartElement, updateCart } = Cart(itemsCart);
console.log(Cart(itemsCart));

const generateItems = () => {
  mocks.forEach((item) => {
    const onAdd = () => {
      itemsCart.push(item);
      updateCart(itemsCart);
    };

    const itemElement = Item(item.name, item.price, item.img, onAdd);
    itemsList.appendChild(itemElement);
  });
};

generateItems();

document.body.appendChild(CartElement);

// Закрытие модального окна
const modalElementDialog = document.querySelector('.modal__dialog');
const modalElementOverlay = document.querySelector('.modal__overlay');
const basketElementCross = document.querySelector('.basket__cross');

basketElementCross.addEventListener('click', () => {
  modalElementDialog.classList.remove('active');
  modalElementOverlay.classList.remove('active');
});

// Информация по скидке
const sale = Sale(5000, 'SALE15');
document.body.appendChild(sale);
