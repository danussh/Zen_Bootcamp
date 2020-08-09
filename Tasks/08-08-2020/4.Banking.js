class Bank{
	constructor(code, address){
		this.code
		this.address
		this.ATM = []
		this.Customer = []
	}
	
	manages(){
		
	}
	
	maintains(){
		
	}
}


class ATM {
	constructor(location, managedby){
		this.location
		this.managedby
	}
	
	identifies(){
		
	}
	
	transactions(){
		
	}
}

class Customer{
	constructor(name, address, dob, cardNumber, pin){
		this.name
		this.address
		this.dob
		this.cardNumber
		this.pin
		this.Account = []
	}
	setAccount(accObjArray){
		if(accObjArray.length <= 2){
			this.Account.push(accObjArray)
		}
	}
	verifyPassword(){
		
	}
	withDrawMoney(ATMobj){
		ATMobj.wuthdrawMoney(100)
	}
}


class ATMTransactions{
	constructor(transactionId, date, type, amount, postBalance){
		this.transactionId
		this.date
		this.type
		this.amount
		this.postBalance
	}
	
	modifies(){
		
	}
}

calss Account{
	constructor(number, balance){
		this.number
		this.balance
	}
	
	deposit(){
		
	}
	
	withdraw(){
		
	}
	
	createTransaction(){
		
	}
}

class currentAccount extends Account{
	constructor(accountNo, balance){
		this.currentAccountNo
		this.savingAccountNo
		this.balance
	}
	
	withdraw(){
		
	}
}

class savingAccount extends Account{
	constructor(accountNo, balance){
		this.currentAccountNo
		this.savingAccountNo
		this.balance
	}
}
