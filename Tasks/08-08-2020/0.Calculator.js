

class Calculator{
	addition(val1, val2){
		return val1 + val2
	}
	
	subtraction(val1, val2){
		return val1 - val2
	}
	
	multiplication(val1, val2){
		return val1*val2
	}
	
	division(val1, val2){
		return val1/val2
	}
	
	square(val){
		return val*val
	}
	
	squareRoot(val){
		return Math.sqrt(val)
	}
	
	exponent(val){
		return Math.exp(val)
	}
	
	sine(val){
		return Math.sin(val * Math.PI/180)
	}
	
	cosine(val){
		return Math.cos(val * Math.PI/180)
	}
	
	tangent(val){
		return Math.tan(val * Math.PI/180)
	}
	
	logarithimic(val){
		return Math.log(val)
	}
	
	modulus(val){
		return Math.abs(val)
	}
}


let calc = new Calculator()
console.log(calc.addition(2,3))
console.log(calc.subtraction(5,3))
console.log(calc.multiplication(2,3))
console.log(calc.division(12,3))
console.log(calc.square(6))
console.log(calc.squareRoot(64))
console.log(calc.exponent(2))
console.log(calc.sine(90))
console.log(calc.cosine(90))
console.log(calc.tangent(90))
console.log(calc.logarithimic(20))
console.log(calc.modulus(-10))