import './sale.scss';

const Sale = (time, promocod) => {
  const SaleElement = document.createElement('div');
  SaleElement.classList = 'sale';

  const SaleElementText = document.createElement('p');
  SaleElementText.classList = 'sale__text';

  const timeSec = time / 1000;
  const textSale = `Успей за ${timeSec} секунд ввести промокод ${promocod} и получи скидку 15%`;
  SaleElementText.innerText = textSale;

  SaleElement.appendChild(SaleElementText);

  const outputAlerts = () => {
    SaleElementText.innerText = `К сожалению вы не успели :( \n Данное окно закроется через ${timeSec} секунды`;
  };
  const addClassDelSale = () => SaleElement.classList.add('sale--display');

  setTimeout(outputAlerts, time);

  const timeForClose = 5000 + time;
  setTimeout(addClassDelSale, timeForClose);

  return SaleElement;
};

export default Sale;
