import './sorting.scss';

const Sorting = () => {
  // создание кнопки
  const sortingElement = document.createElement('button');
  sortingElement.innerText = 'Oтсортировать по цене';
  sortingElement.classList = 'sorting';

  // флаг для контроля убывающей сортировки или возрастающей
  let toggle = false;

  // прослушивание нажатий на кнопку
  sortingElement.addEventListener(
    'click',
    () => {
      const items = document.querySelectorAll('.item');
      const parent = document.querySelector('.items-list');

      // объект для хранения цен
      const SortElements = {};

      // перебор всех item на странице
      items.forEach((item, indx) => {
        const itemValue = parseInt(
          item.querySelector('.item__price').textContent.replace('Цена:', ''),
          10
        );

        // к каждой цене привязываем объект из самого item и его первоначального положения indx
        SortElements[itemValue] = { element: item, index: indx };
      });

      // создаем объект, состоящий из цен
      const keys = Object.keys(SortElements);

      // фунции для чтения флага
      function compareNumeric1(a, b) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        if (a < b) return 1;
        if (a > b) return -1;
      }
      function compareNumeric2(a, b) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        if (a > b) return 1;
        if (a < b) return -1;
      }

      // сортировка
      if (toggle === false) {
        keys.sort(compareNumeric1);
        toggle = !toggle;
      } else {
        keys.sort(compareNumeric2);
        toggle = !toggle;
      }

      // переписывание массива ключей
      keys.map((key, indx) => {
        parent.append(SortElements[key].element);
        SortElements[key].index = indx;
      });

      return toggle;
    },
    toggle
  );

  return sortingElement;
};

export default Sorting;
