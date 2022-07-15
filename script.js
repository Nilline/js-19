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

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
// rememberMyFilms();

function detectMyLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
detectMyLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function whiteYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genres = prompt(`Ваш любимый жант под номером ${i + 1}`);
		if (genres == '') {
			i--;
		} else {
			personalMovieDB.genres[i] = genres;
		}
	}
}
// whiteYourGenres();


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