import './item.scss';

const Item = (name, price, img, onAdd) => {
  const ItemElement = document.createElement('div');
  ItemElement.classList = 'item';

  const nameElement = document.createElement('span');
  nameElement.innerText = name;
  nameElement.classList = 'item__name';

  const imgElement = document.createElement('img');
  imgElement.src = img;
  imgElement.classList = 'item__img';

  const priceElement = document.createElement('span');
  priceElement.innerText = `Цена: ${price}`;
  priceElement.classList = 'item__price';

  const buttonElement = document.createElement('button');
  buttonElement.innerText = 'Добавить';
  buttonElement.classList = 'item__add-button';
  buttonElement.addEventListener('click', onAdd);

  ItemElement.appendChild(nameElement);
  ItemElement.appendChild(imgElement);
  ItemElement.appendChild(priceElement);
  ItemElement.appendChild(buttonElement);

  return ItemElement;
};

export default Item;
