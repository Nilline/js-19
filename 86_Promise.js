/*
!Promise
*/

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => { // resolve = Данные получены - reject = Произошла ошибка
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			proce: 2000
		};

		resolve(product);
	}, 2000);
});

req.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.status = 'order';
			resolve(data);
		}, 2000);
	});
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch(() => {
	console.error('Произошла ошибка');
}).finally(() => {
	console.log('Finally');
});

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000'));
// test(2000).then(() => console.log('2000'));

// Promise.all([test(1000), test(2000)]).then(() => { // Проверка какой промис выполнится последний
// 	console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => { // Проверка какой промис выполнится первый
// 	console.log('All');
// });