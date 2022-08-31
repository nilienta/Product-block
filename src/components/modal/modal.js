import './modal.scss';

import Basket from '../basket';

import BasketImg from '../../assets/icons/basket.png';

const Modal = () => {
  const modalElement = document.createElement('button');
  modalElement.classList.add('modal', 'js-open-modal');

  // создание кнопки
  const modalElementImg = document.createElement('img');
  modalElementImg.classList.add('modal__img');
  modalElementImg.src = BasketImg;
  modalElementImg.alt = 'Корзина';

  modalElement.appendChild(modalElementImg);

  // создание модального окна
  const modalElementDialog = document.createElement('div');
  modalElementDialog.classList.add('modal__dialog');

  const basket = Basket();
  modalElementDialog.appendChild(basket);

  document.body.appendChild(modalElementDialog);

  // создание подложки
  const modalElementOverlay = document.createElement('div');
  modalElementOverlay.classList.add('modal__overlay');
  modalElementOverlay.id = 'overlay-modal';

  modalElement.appendChild(modalElementOverlay);

  // создание функций для работы модального окна
  modalElementImg.addEventListener('click', (event) => {
    event.preventDefault();
    modalElementDialog.classList.add('active');
    modalElementOverlay.classList.add('active');
  });

  // закрытие окна при клике на ESC
  document.body.addEventListener(
    'keyup',
    (e) => {
      if (e.key === 'Escape') {
        modalElementDialog.classList.remove('active');
        modalElementOverlay.classList.remove('active');
      }
    },
    false
  );

  // закрытие при нажатии на оверлей
  modalElementOverlay.addEventListener('click', () => {
    modalElementDialog.classList.remove('active');
    modalElementOverlay.classList.remove('active');
  });

  return modalElement;
};

export default Modal;
