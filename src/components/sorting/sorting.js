import './sorting.scss';

const Sorting = () => {

	// создание кнопки
	const sortingElement = document.createElement('div');
	sortingElement.classList = 'sorting';

	const sortingElementBtn = document.createElement('button');
	sortingElementBtn.innerText = 'Oтсортировать по цене';
	sortingElementBtn.classList = 'sorting__btn';

	sortingElement.appendChild(sortingElementBtn);

	// флаг для контроля убывающей сортировки или возрастающей
	var toggle = false;
	
	// прослушивание нажатий на кнопку
	sortingElementBtn.addEventListener('click', function(){
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
		console.log (keys);
	
		// переписывание массива ключей
		keys.map(function(key, indx){
			parent.insertAdjacentElement('beforeEnd', SortElements[key]['element']);
			console.log(SortElements[key]['element']);
			SortElements[key]['index'] = indx;
		});
		console.log (keys);

		return toggle;
	}, toggle);

	return sortingElement

}

export default Sorting;