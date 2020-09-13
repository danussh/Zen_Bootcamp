class Arraymethods{
    sum(array:Array<number>) {
        let total = 0
        for(let i=0; i<array.length; i++){
            total += array[i]
        }
        return total
    }

    reduce(array:Array<number>, func:Function, startValue: number){
        for(let i=0; i<array.length; i++){
            startValue = func(startValue, array[i])
        }
        return startValue
    }

    chunk(array:Array<number>, chunks:number){
        let result = []
        let tempArray = []
        let count = 0
        for(let i=0; i<array.length; i++){
            if (count == chunks){
                result.push(tempArray)
                count = 0
                tempArray = []
                tempArray.push(array[i])
            }
            else{
                tempArray.push(array[i]) 
            }
            count++
        }
        if (tempArray.length > 0){
            result.push(tempArray)
        }
       
        return result
    }

    filter(array:Array<number>, condition: Function){
        let result = []
        for(let i=0; i<array.length; i++){
            if (condition(array[i])){
                result.push(array[i])
            }
        }
        return result
    }
}

let object = new Arraymethods()
let array = [1, 2, 3, 4, 5, 6]
console.log("Sum: ", object.sum(array))
console.log("Filter: ", object.filter(array, (a: number)=>{return a%2 == 0}))
console.log("Chunk: ", object.chunk(array, 2))
console.log("Reduce: ", object.reduce(array, (a:number, b:number)=>{return a * b}, 1))










