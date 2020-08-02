function second(a, b) {
	var opr1 = 10;
	var opr2 = 90;
	return b[a](opr1, opr2);
}

function addition(a, b)
{
	return a + b;
}

function subtraction(a, b)
{
	return a - b;
}
function multiplication(a, b)
{
	return a*b;
}

arr = [addition,subtraction,multiplication];
console.log(second(0,arr));  // 100
console.log(second(1,arr));  // -80
console.log(second(2,arr));  // 900


