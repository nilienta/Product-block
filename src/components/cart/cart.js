import './cart.scss';

const Cart = (cart) => {
  const CartElement = document.createElement('div');
  CartElement.className = 'cart';

  const priceElement = document.querySelector('.basket__price');
  const itemCountElement = document.querySelector('.basket__title');
  const stockBall = document.querySelector('.stock__ball');

  itemCountElement.innerText = `Товаров в корзине: ${cart.length}`;
  stockBall.innerText = `${cart.length}`;
  priceElement.innerText = 'Цена: 0';

  const itemAddCart = (name, price, img) => {
    const ItemCart = document.createElement('div');
    ItemCart.classList = 'item-cart';

    const imgItemCart = document.createElement('img');
    imgItemCart.classList = 'item-cart__img';
    imgItemCart.src = img;

    const wrapCart = document.createElement('div');
    wrapCart.classList = 'item-cart__wrap';

    const nameItemCart = document.createElement('span');
    nameItemCart.innerText = name;
    nameItemCart.classList = 'item-cart__name';

    const priceItemCart = document.createElement('span');
    priceItemCart.innerText = `Цена: ${price}`;
    priceItemCart.classList = 'item-cart__price';

    wrapCart.appendChild(nameItemCart);
    wrapCart.appendChild(priceItemCart);

    ItemCart.appendChild(imgItemCart);
    ItemCart.appendChild(wrapCart);

    return ItemCart;
  };

  const list = document.querySelector('.basket__list');

  const updateCart = (newCart) => {
    // подсчёт товаров и цены
    itemCountElement.innerText = `Товаров в корзине: ${newCart.length}`;
    stockBall.innerText = `${cart.length}`;
    const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
    priceElement.innerText = `Цена: ${sumPrice}`;

    // обновление списка товаров в корзине
    for (let i = 0; i < newCart.length; i += 1) {
      const newitemCart = itemAddCart(
        newCart[i].name,
        newCart[i].price,
        newCart[i].img
      );
      list.appendChild(newitemCart);
    }
  };

  const basketClear = document.querySelector('.basket__clear');
  basketClear.addEventListener('click', () => {
    list.innerText = '';
    stockBall.innerText = '0';
    itemCountElement.innerText = 'Товаров в корзине: 0';
    priceElement.innerText = 'Цена: 0';

    // !!! как-то обнулить cart с главного js
  });

  return { CartElement, updateCart };
};

export default Cart;
