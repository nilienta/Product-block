import ItemImg1 from '../../assets/img/item1.jpg';
import ItemImg2 from '../../assets/img/item2.png';
import ItemImg3 from '../../assets/img/item3.png';

import './item.scss';

window.onload = () => {
  const ItemImg = [ItemImg1, ItemImg2, ItemImg3];
  const countImg = document.querySelectorAll('.item__img').length;
  for (let i = 0; i < countImg; i += 1) {
    const currentImg = document.querySelectorAll('.item__img')[i];
    currentImg.src = ItemImg[i];
  }
  //   document.querySelectorAll('.item__img').array.map((item, index)=>{
  //     item.src = ItemImg[index]
  //   })
};

const Item = (name, price, onAdd) => {
  const ItemElement = document.createElement('div');
  ItemElement.classList = 'item';

  const nameElement = document.createElement('span');
  nameElement.innerText = name;
  nameElement.classList = 'item__name';

  const imgElement = document.createElement('img');
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
