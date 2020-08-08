class Movie{
	constructor(title, studio, rating="PG"){
		this.title = title
		this.studio = studio
		this.rating = rating
	}
	
	getPG(array){
		return array.filter((item)=>(item.rating=="PG"))
	}
}
let movieArray = []
let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13")
movieArray.push(movie1)
let movie2 = new Movie("Lord of Rings", "XYZ Productions", "PG")
movieArray.push(movie2)
console.log(movie2.getPG(movieArray))