import './basket.scss';

const Basket = () => {

	const basketElement = document.createElement('div');
	basketElement.classList.add('basket');

	const basketElementHeader = document.createElement('div');
	basketElementHeader.classList.add('basket__header');

	const basketElementTitle = document.createElement('h1');
	basketElementTitle.classList.add('basket__title');

	const basketElementClear = document.createElement('button');
	basketElementClear.classList.add('basket__clear');
	basketElementClear.innerText = ('Очистить корзину');

	//!!!!!!!!!!Добавить закрытие по крестику в этот блок

	basketElementHeader.append(basketElementTitle, basketElementClear);
	

	const basketElementMain = document.createElement('div');
	basketElementMain.classList.add('basket__main');

	const basketElementList = document.createElement('div');
	basketElementList.classList.add('basket__list');

	basketElementMain.append(basketElementList);


	const basketElementFooter = document.createElement('div');
	basketElementFooter.classList.add('basket__footer');

	const basketElementPrice = document.createElement('div');
	basketElementPrice.classList.add('basket__price');

	const basketElementBuy = document.createElement('button');
	basketElementBuy.classList.add('basket__buy');
	basketElementBuy.innerText = ('Перейти к оформлению');
	basketElementBuy.onclick = function() { 
		window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s');
	}
	
	basketElementFooter.append(basketElementPrice, basketElementBuy);
	
	basketElement.appendChild(basketElementHeader);
	basketElement.appendChild(basketElementMain);
	basketElement.appendChild(basketElementFooter);

	return basketElement;

}

export default Basket
