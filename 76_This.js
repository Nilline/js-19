
/*
!This

1. Обычная функция: This = window, но если use strict This = undefined
2. Контекст у методов обьекта - сам обьект
3. This в конструкторах и классах - это новый экземпляр обьекта
4. Ручная привязка this: call, apply, bind
*/

/*
function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John'
};

sayName.call(user, ' Smith');
sayName.apply(user, [' Smith']);

function count(num) {
	return this * num;
}

const double = count.bind(2);

console.log(double(3));
*/