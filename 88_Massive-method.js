/*
!Massive methods
*/

// !Filter

const names = ['ivan', 'ann', 'alex', 'alina', 'vladislav'];

const shortNames = names.filter(name => {
	return name.length < 5;
});

// console.log(shortNames);

// !Map

// const answers = ['IvAn', 'AnnA', 'ADDDED'];

// const result = answers.map(item => {
// 	return item.toLowerCase();
// });

// console.log(answers);

// !Every / Some

const some = [4, 'qwq', 'afasdfsf'];

// console.log(some.some(item => typeof(item) === 'number')); // Проверка хотя бы один элемент в массиве равен условию

// console.log(some.every(item => typeof(item) === 'number')); // Проверка все ли элементы в массиве равны условию

// !Reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => {
	return sum + current;
});
// console.log(res);

const obj = {
	dog: 'animal',
	alex: 'persone',
	cat: 'animal',
	ann: 'persone',
};

const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);

console.log(newArr);