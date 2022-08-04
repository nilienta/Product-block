import './sorting.scss';

const Sorting = () => {

	// создание кнопки
	const sortingElement = document.createElement('button');
	sortingElement.innerText = 'Oтсортировать по цене';
	sortingElement.classList = 'sorting';

	// флаг для контроля убывающей сортировки или возрастающей
	var toggle = false;
	
	// прослушивание нажатий на кнопку
	sortingElement.addEventListener('click', function(){
	  var items = document.querySelectorAll('.item');
	  var parent = document.querySelector('.items-list');

		// объект для хранения цен
		var SortElements = {};

		// перебор всех item на странице
		items.forEach(function(item, indx){
			var itemValue = parseInt(item.querySelector('.item__price').textContent.replace('Цена:', ''));

			// к каждой цене привязываем объект из самого item и его первоначального положения indx
			SortElements[itemValue] = {'element': item, 'index': indx};
		});

		// создаем объект, состоящий из цен
		var keys = Object.keys(SortElements);


		// фунции для чтения флага
		function compareNumeric1(a, b) {
			a = parseInt(a);
			b = parseInt(b);
			if (a < b) return 1;
			if (a > b) return -1;
		}
		function compareNumeric2(a, b) {
			a = parseInt(a);
			b = parseInt(b);
			if (a > b) return 1;
			if (a < b) return -1;
		}

		// сортировка 
		if(toggle === false){
			keys.sort(compareNumeric1);
			toggle = !toggle;
		} else {
			keys.sort(compareNumeric2);
			toggle = !toggle;
		}
		
		// переписывание массива ключей
		keys.map(function(key, indx){
			parent.insertAdjacentElement('beforeEnd', SortElements[key]['element']);
			SortElements[key]['index'] = indx;
		});

		return toggle;
	}, toggle);

	return sortingElement

}

export default Sorting;