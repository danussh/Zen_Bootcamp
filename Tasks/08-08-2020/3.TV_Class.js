class TV {
	constructor(brand, price, inches, onoffStatus,channel=1, volume=50){
		this.brand = brand
		this.channel = channel
		this.price = price
		this.inches = inches
		this.onoffStatus = onoffStatus
		this.volume = volume
	}
	
	increaseVolume(value){
		if(this.volume + value >100){
			return -1
		}
		else{
			this.volume += value
			return this.volume
		}
	}
	
	decreaseVolume(value){
		if(this.volume - value < 0){
			return -1
		}
		else{
			this.volume -= value
			return this.volume
		}
	}
	
	setChannel(value){
		if (value <= this.channel){
			this.channel = value
		}
		return this.channel
	}
	
	reset(){
		this.channel = 1
		this.volume = 50
	}
	
	status(){
		return this.brand + " at channel " + this.channel + ", volume " + this.volume 
	}
	
}

let tv1 = new TV("Panasonic", 50000, 12, "ON", 50, 45)
console.log(tv1.increaseVolume(5))
console.log(tv1.increaseVolume(60))
console.log(tv1.decreaseVolume(5))
console.log(tv1.decreaseVolume(60))
console.log(tv1.setChannel(23))
tv1.reset()
console.log(tv1.status())


class LED extends TV{
	constructor(screenThickness, energyUsage, lifeSpan, refreshRate,viewingAngle, backlight, brand, price, inches, onoffStatus, channel, volume){
		super(brand, price, inches, onoffStatus, channel, volume)
		this.screenThickness = screenThickness
		this.energyUsage = energyUsage
		this.lifeSpan = lifeSpan
		this.refreshRate = refreshRate
		this.viewingAngle = viewingAngle
		this.backlight = backlight
	}
	printViewAngle(){
		console.log(this.viewingAngle)
	}
	
	printBacklight(){
		console.log(this.backlight)
	}
	
	displayDetails(){
		return super.status() + ", screen thickness "+ this.screenThickness + " inches, energy usage " + this.energyUsage + " watts, life span " + this.lifeSpan + " years, refresh rate " + this.refreshRate+" per second, viewing angle "+ this.viewingAngle + " degrees, backlight "+this.backlight 
	}
}
led1 = new LED(12, 120, 3, 100, 40, "ON", "Panasonic", 100000, 15, "ON", 50, 60)
led1.printViewAngle()
led1.printBacklight()
console.log(led1.displayDetails())



class Plasma extends TV{
	constructor(screenThickness, energyUsage, lifeSpan, refreshRate,viewingAngle, backlight, brand, price, inches, onoffStatus, channel, volume){
		super(brand, price, inches, onoffStatus, channel, volume)
		this.screenThickness = screenThickness
		this.energyUsage = energyUsage
		this.lifeSpan = lifeSpan
		this.refreshRate = refreshRate
		this.viewingAngle = viewingAngle
		this.backlight = backlight
	}
	
	printViewAngle(){
		console.log(this.viewingAngle)
	}
	
	printBacklight(){
		console.log(this.backlight)
	}
	
	displayDetails(){
		return super.status() + ", screen thickness "+ this.screenThickness + " inches, energy usage " + this.energyUsage + " watts, life span " + this.lifeSpan + " years, refresh rate " + this.refreshRate+" per second, viewing angle "+ this.viewingAngle + " degrees, backlight "+this.backlight 
	}
}

plasma1 = new Plasma(12, 120, 3, 100, 40, "ON", "Panasonic", 100000, 15, "ON", 50, 60)
plasma1.printViewAngle()
plasma1.printBacklight()
console.log(plasma1.displayDetails())