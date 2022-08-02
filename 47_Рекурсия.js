// function pow(x, n) {
// 	let result = 1;
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

function pow(x, n) {
	if (n <= 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

// console.log(pow(2, 4));

let students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		name: 'Ivan',
		progress: 60
	}],

	html: {
		basic: [{
			name: 'Peter',
			progress: 20
		}, {
			name: 'Ann',
			progress: 18
		}],

		pro: [{
			name: 'Sam',
			progress: 10
		}]
	}
};

function getTotalProgressByIteration(data) {
	let total = 0; // Общий прогресс
	let students = 0; // Общее число студентов

	for (let course of Object.values(data)) { // Получаем значения обьекта в виде массива

		if (Array.isArray(course)) { // Если массив
			students += course.length; // Добавляем количество студентов

			for (let i = 0; i < course.length; i++) { // Перебираем массив
				total += course[i].progress; // Обращаемся к обьекту и его значению прогресса и добавляем в total
			}
		} else { // Если не массив
			for (let subCourse of Object.values(course)) { // Получаем значения обьекта в виде массива
				students += subCourse.length; // Добавляем количество студентов

				for (let i = 0; i < subCourse.length; i++) { // Перебираем массив
					total += subCourse[i].progress; // Обращаемся к обьекту и его значению прогресса и добавляем в total
				}
			}
		}
	}

	return total / students; // Возвращаем прогресс деленный на студентов = Получаем средний прогресс всех студентов
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const SubDataArr = getTotalProgressByRecursion(subData);
			total[0] += SubDataArr[0];
			total[1] += SubDataArr[1];
		}

		return total;
	}
}

let result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);

// Факториал

function calcFuctorialNumber(num) {
	if (typeof (num) == 'number' && Number.isInteger(num)) {
		if (num <= 1) {
			return 1;
		} else {
			return num * calcFuctorialNumber(num - 1);
		}
	} else {
		return 'Вы ввели не верно число';
	}

	// Более кототкий вариант
	// return n ? n * calcFuctorialNumber(n - 1) : 1;
}

console.log(calcFuctorialNumber(4));