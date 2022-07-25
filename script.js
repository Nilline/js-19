/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
- count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - тоже поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean(логическое) значение false
	 
3) Задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
		 'logan': '8.1'
		}
		
		Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		if (this.count == 0 || isNaN(this.count)) {
// 			this.start();
// 		}

// 	},
// 	showMyDB: function (hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (this.privat) {
// 			this.privat = false;
// 		} else {
// 			this.privat = true;
// 		}
// 	},
// 	rememberMyFilms: function () {
// 		for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренных фильмов?', '').trim(), // - Метод trim удаляет пробелы в начале и конце строки
// 				b = prompt('На сколько оцените его?', '');

// 			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 				this.movies[a] = b;
// 				console.log('done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}
// 		}
// 	},
// 	detectMyLevel: function () {
// 		if (this.count < 10) {
// 			console.log("Просмотрено довольно мало фильмов");
// 		} else if (this.count >= 10 && this.count < 30) {
// 			console.log("Вы классический зритель");
// 		} else if (this.count >= 30) {
// 			console.log("Вы киноман");
// 		} else {
// 			console.log("Произошла ошибка");
// 		}
// 	},
// 	whiteYourGenres: function () {
// 		for (let i = 0; i < 3; i++) {
// 			let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
// 			if (genres !== null && genres.trim() !== '') {
// 				this.genres[i] = genres.trim();
// 				if (i == 2) {}
// 			} else {
// 				i--;
// 			}
// 		}
// 		this.genres.forEach((item, i) => {
// 			console.log(`Любимый жанр ${i + 1} - это ${item}`);
// 		});
// 	}
// };

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectMyLevel();

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.whiteYourGenres();

/*
console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
	console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
	console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!')
}
*/

// ЦИКЛЫ И МЕТКИ
/*
for (let i = 5; i <= 10; i++) {
	console.log(i);
}

for (let i = 20; i > 10; i--) {
	if (i === 13) {
		break;
	};
	console.log(i);
}

for (let i = 2; i <= 10; i++) {
	if (i % 2) {
		continue;
	}
	console.log(i);
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;

while (i <= 16) {
	if (i % 2) {
		console.log(i);
	}
	i++;
}

const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
	arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);
*/

/*
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		result.push(num);
	}
	// Не трогаем
	return result;
}
firstTask();

// Место для второй задачи
function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	for (let i = 0; i < data.length; i++) {
		if (typeof data[i] == 'number') {
			data[i] = data[i] * 2;
		} else if (typeof data[i] == 'string') {
			data[i] = `${data[i]} - done`
		}
	}

	// Не трогаем
	return data;
}
secondTask();

// Место для третьей задачи
function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// for (let i = data.length - 1; i !== -1; i--) {
	// 	result.push(data[i]);
	// }

	for (let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.length - i]
	}
	console.log(result);
	// Не трогаем
	return result;
}
thirdTask();

function figure() {
	const lines = 5;
	let result = '';
	for (let i = 0; i <= lines; i++) {
		for (let j = 0; j <= i; j++) {
			if (j === 0) {
				result += `${' '.repeat(lines - i)}*`;
			} else {
				result += '**';
			}
		}
		result += '\n';
	}
	// Проверяется именно переменная result, формируйте строку в ней
	console.log(result);
}
figure();

function figure2() {
	const lines = 5;
	let result = '';
	for (let i = 0; i <= lines; i++) {
		for (let j = 0; j < lines - i; j++) {
			result += " ";
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			result += "*";
		}
		result += "\n";
	}

	console.log(result)
}
figure2();
*/

// function returnNeighboringNumbers(num) {
// 	const arr = [];
// 	for (let i = 0; i < 3; i++) {
// 		if (i == 0) {
// 			arr.push(num - 1);
// 		} else if (i == 2) {
// 			arr.push(num + 1);
// 		} else {
// 			arr.push(num);
// 		}
// 	}
// 	return arr;
// }
// const arr = returnNeighboringNumbers(5);

// console.log(arr);

// function getMathResult(base, repeat) {
// 	let result = '';
// 	if (repeat > 0 && typeof repeat === 'number') {
// 		for (let i = 1; i <= repeat; i++) {
// 			if (i === repeat) {
// 				result += base * i;
// 			} else {
// 				result += base * i + '---';
// 			}
// 		}
// 	} else {
// 		result = +base;
// 	}
// 	return result;
// }

// 30 LESSON PRACTICE
/*
// Место для первой задачи
function calculateVolumeAndArea(num) {
	let result = '';
	if (Number.isInteger(num) && num > 0) { //Проверка есть ли дробные значения
		result = `Объем куба: ${num * num * num}, площадь всей поверхности: ${num * num * 6}`;
	} else {
		result = 'При вычислении произошла ошибка';
	}
	return result;
}
console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(num) {
	if (num > 0 && num <= 36 && Number.isInteger(num) && !isNaN(num)) {
		for (let i = 4; i <= 36; i = i + 4) {
			if (num <= i) {
				return i / 4;
			}
		}
	} else if (isNaN(num) || !Number.isInteger(num) || num < 0) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else {
		return 'Таких мест в вагоне не существует';
	}
}
console.log(getCoupeNumber(1.1));
*/


// 31 LESSON PRACTICE
/*
// Место для первой задачи
function getTimeFromMinutes(time) {
	let hours = Math.floor(time / 60),
		minutes = Math.floor(time % 60),
		str = '';

	if (time < 0 || !Number.isInteger(time) || typeof time !== 'number') {
		return 'Ошибка, проверьте данные';
	}

	switch (hours) {
		case 0:
			str = 'часов';
			break;
		case 1:
			str = 'час';
			break;
		case 2:
		case 3:
		case 4:
			str = 'часа';
			break;
		default:
			str = 'часов';
	}
	return `Это ${hours} ${str} и ${minutes} минут`;
}
console.log(getTimeFromMinutes(390));
// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
		return 0;
	}
	let result = Math.max(a, b, c, d);
	return result;
}
console.log(findMaxNumber(2, 5, 555.5, 62));
*/

// 32 LESSON PRACTICE - ЦИФРЫ ФИБОНАЧЧИ
/*
function fib(firstNum) {
	let a = 0;
	let b = 1;
	let result = '';
	if (typeof firstNum == 'number' && Number.isInteger(firstNum)) {
		for (let i = 0; i < firstNum; i++) {

			if (i == 0) {
				result += `${a}`;
			} else if (i == 1) {
				result += ` ${b}`;
			} else if (i > 1) {
				let intermediate = a + b;
				a = b;
				b = intermediate;
				result += ` ${intermediate}`;
			}
		}
	}
	return result;
}
console.log(fib(3));
*/

// 35 LESSON PRACTICE - Работа с обьектами