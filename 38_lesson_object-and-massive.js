// Lesson 38 practice (objects)

/*
const shoppingMallData = {
	shops: [{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
		// 250 525 500 400 = 1675 = 50250
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let total = 0;
	data.shops.forEach(item => {
		if (typeof (item) == 'object') {
			let width = 0;
			let length = 0;
			for (let key in item) {
				if (key == 'width') {
					width = item[key];
				} else if (key == 'length') {
					length = item[key];
				}
				if (width && length) {
					total += width * length * data.height;
				}
			}
		}
	});
	if (data.budget > data.moneyPer1m3 * total) {
		return 'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}

isBudgetEnough(shoppingMallData);

// Как нужно было

function isBudgetEnough(data) {
	let total = 0;
	data.shops.forEach(item => total += item.width * item.length * data.height);
	
	if (data.budget > data.moneyPer1m3 * total) {
		return 'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}

isBudgetEnough(shoppingMallData);
*/