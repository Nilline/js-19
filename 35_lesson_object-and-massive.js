'use strict';
/*
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ['ru', 'ua'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function () {
		return `Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.skills.languages.join(' ').toUpperCase()}`;
	}
};
console.log(personalPlanPeter.showAgeAndLangs());

function showExperience(plan) {
	const {
		exp
	} = plan.skills;
	return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let result = '';
	for (let key in plan) {
		if (typeof plan[key] === 'object') {
			for (let i in plan[key]) {
				if (typeof plan[key][i] === 'object' && i == 'programmingLangs') {
					for (let j in plan[key][i]) {
						result += `Язык ${j} изучен на ${plan[key][i][j]}%\n`;
					}
				}
			}
		}
	}
	return result;
}
console.log(showProgrammingLangs(personalPlanPeter));
*/

// !Practice 2
/*
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length) {
		return `Семья состоит из: ${arr.join(' ')} `;
	} else {
		return 'Семья пуста';
	}
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase());
	});
}
console.log(standardizeStrings(family));
*/

// !Practice 3

/*
const someString = 'This is some strange string';

function reverse(str) {
	if (typeof str !== 'string') return 'Ошибка!';
	const srtStringToMassive = str.split(''), // Преобразуем строку в массив
		strMassiveReverse = srtStringToMassive.reverse(), // Разворачиваем массив
		strMassiveToString = strMassiveReverse.join(''), // Преобразуем массив в строку
		result = strMassiveToString;
	return result;
}
// console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	let result = '';
	!arr.length ? result = 'Нет доступных валют' : result = 'Доступные валюты:\n';
		
	arr.forEach(item => {
		if (item !== missingCurr) {
			result += `${item}\n`;
		}
	});
	
	return result;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));
*/