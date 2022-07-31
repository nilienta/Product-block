import './cart.scss';

const Cart = (cart) => {
	const CartElement = document.createElement('div');
	const priceElement = document.createElement('span');
	const itemCountElement = document.createElement('span');

	itemCountElement.innerText = `Кол-во товаров: ${cart.length}`;
	priceElement.innerText = `Цена: 0`;

	CartElement.className = 'cart';
	priceElement.className = 'cart__count';
	itemCountElement.className = 'cart__price';

	CartElement.appendChild (priceElement);
	CartElement.appendChild (itemCountElement);


	const updateCart = (newCart) => {
		itemCountElement.innerText = `Кол-во товаров: ${newCart.length}`;
		const sumPrice = newCart.reduce((sum, item) => sum + item.price,0);
		priceElement.innerText = `Цена: ${sumPrice}`;
	}

	return {CartElement,updateCart};
};

export default Cart;