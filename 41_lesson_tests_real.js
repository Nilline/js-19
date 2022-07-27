"use strict";
// Lesson 40 Тесты

/*
Какое будет выведено значение: let x = 5; alert( x++ ); ? ++++++++++++ (5)

Чему равно такое выражение: [ ] + false - null + true ? ------------- (NaN так как оператор вычетания преобразует в число)

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? ++++++++++++ (2)

Чему равна сумма [ ] + 1 + 2? +++++-------- (12 - Сложение строк так как пустой массив равен "" пустой строке)

Что выведет этот код: alert( "1"[0] )? +++++++++++++ (1 - Символ под номером 0 в строке)

Чему равно 2 && 1 && null && 0 && undefined ? +++++++++++++++ (null - Так как оператор && Остановился на первом значении которое в переводе в булевый тип данных будет false и вернул это значение)

Есть ли разница между выражениями? !!( a && b ) и (a && b)? ---------- (Нет - пришлось почитать документацию)

Что выведет этот код: alert( null || 2 && 3 || 4 ); ? ---------------- ( 3 - Внимательно нужно смотреть не заметил оператор && который выполняется раньше чем ||)

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? ++++++++++++ (Нет - так как каждый массив уникален)

Что выведет этот код: alert( +"Infinity" ); ? +++++++++++++++ (Infinity - так как унарный оператор + преобразует строку в число)

Верно ли сравнение: "Ёжик" > "яблоко"? ++++++++++--------------- (false - )

Чему равно 0 || "" || 2 || undefined || true || falsе ? -------+++++++++++++++ (2 - || возвращает первое значение которое вернет true, если ни одно значение не вернуло true то возвращает последнее значение у условии)
*/

// Practice 40+

/*
const restorantData = {
	menu: [{
			name: 'Salad Caesar',
			price: '14$'
		},
		{
			name: 'Pizza Diavola',
			price: '9$'
		},
		{
			name: 'Beefsteak',
			price: '17$'
		},
		{
			name: 'Napoleon',
			price: '7$'
		}
	],
	waitors: [{
		name: 'Alice',
		age: 22
	}, {
		name: 'John',
		age: 24
	}],
	averageLunchPrice: '20$',
	openNow: true
};

function isOpen(prop) {
	let answer = '';
	prop ? answer = 'Открыто' : answer = 'Закрыто';

	return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + sDish.price.slice(0, -1) < average) {
		return 'Цена выше средней';
	} else {
		return 'Цена ниже средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors = [{
		name: 'Mike',
		age: 32
	}];
	return copy;
}

console.log(restorantData);
console.log(transferWaitors(restorantData));
*/
