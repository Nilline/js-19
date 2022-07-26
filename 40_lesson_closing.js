"use strict";
// Lesson 40 Замыкание

function createCounter() {
	let counter = 0;
	const counterIncriment = function () {
		counter = counter + 1;
		return counter;
	};
	return counterIncriment;
}

const incriment = createCounter(); // мешочек с инфой в переменной
const c1 = incriment();
const c2 = incriment();
const c3 = incriment();

console.log(c1, c2, c3);