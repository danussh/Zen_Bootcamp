var Arraymethods = /** @class */ (function () {
    function Arraymethods() {
    }
    Arraymethods.prototype.sum = function (array) {
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i];
        }
        return total;
    };
    Arraymethods.prototype.reduce = function (array, func, startValue) {
        for (var i = 0; i < array.length; i++) {
            startValue = func(startValue, array[i]);
        }
        return startValue;
    };
    Arraymethods.prototype.chunk = function (array, chunks) {
        var result = [];
        var tempArray = [];
        var count = 0;
        for (var i = 0; i < array.length; i++) {
            if (count == chunks) {
                result.push(tempArray);
                count = 0;
                tempArray = [];
                tempArray.push(array[i]);
            }
            else {
                tempArray.push(array[i]);
            }
            count++;
        }
        if (tempArray.length > 0) {
            result.push(tempArray);
        }
        return result;
    };
    Arraymethods.prototype.filter = function (array, condition) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (condition(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    };
    return Arraymethods;
}());
var object = new Arraymethods();
var array = [1, 2, 3, 4, 5, 6];
console.log("Sum: ", object.sum(array));
console.log("Filter: ", object.filter(array, function (a) { return a % 2 == 0; }));
console.log("Chunk: ", object.chunk(array, 2));
console.log("Reduce: ", object.reduce(array, function (a, b) { return a * b; }, 1));
