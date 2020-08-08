class Circle{
	constructor(radius=1.0, color="red"){
		this.radius = radius
		this.color = color
	}
	getColor(){
		return this.color
	}
	
	getRadius(){
		return this.radius
	}
	
	setColor(color){
		this.color = color
	}
	
	setRadius(radius){
		this.radius  = radius
	}
	
	getArea(){
		return Math.PI*this.radius*this.radius
	}
	toString(){
		return this.radius + " " + this.color
	}
}

let circle1 = new Circle()
console.log(circle1.toString())
let circle2 = new Circle(2.0)
console.log(circle2.toString())
let circle3 = new Circle(3.0, "blue")
console.log(circle3.toString())
console.log(circle3.getColor())
console.log(circle3.getRadius())
circle3.setRadius(4.0)
circle3.setColor("orange")
console.log(circle3.toString())
console.log(circle3.getArea())

