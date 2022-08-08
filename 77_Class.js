/*
!Class
*/

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	calcArea() {
		return this.width * this.height;
	}
}

class ColoredRecrangleWithText extends Rectangle {
	constructor(width, height, text, bgColor) {
		super(width, height);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст ${this.text}, фон: ${this.bgColor}`);
	}
}

const div = new ColoredRecrangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10,5);
// const long = new Rectangle(100,5000);
// console.log(square.calcArea());
// console.log(long.calcArea());