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

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
// const lastFilmName1 = prompt('Один из последних просмотренных фильмов?', ''),
// 	lastFilmRating1 = prompt('На сколько оцените его?', ''),
// 	lastFilmName2 = prompt('Один из последних просмотренных фильмов?', ''),
// 	lastFilmRating2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastFilmName1] = lastFilmRating1;
// personalMovieDB.movies[lastFilmName2] = lastFilmRating2;


// console.log(personalMovieDB);


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