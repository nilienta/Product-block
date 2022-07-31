import './sale.scss'

const Sale = (time, promocod) => {
	const SaleElement = document.createElement('div');
	SaleElement.classList = 'sale';

	const SaleElementText = document.createElement('p');
	SaleElementText.classList = 'sale__text';

	var timeSec = time/1000;
	var textSale = `Успей за ${timeSec} секунд ввести промокод ${promocod} и получи скидку 15%`;
	SaleElementText.innerText = textSale;
	// console.log(textSale);

	SaleElement.appendChild(SaleElementText);

	const outputAlerts = () => SaleElementText.innerHTML = `К сожалению вы не успели :( <br> Данное окно закроется через 5 секунды `;
	const addClassDelSale = () => SaleElement.classList = 'sale--display';

	setTimeout(outputAlerts, time);

	var timeForClose = 5000 + time;
	setTimeout(addClassDelSale, timeForClose);

	return SaleElement;

}

export default Sale
