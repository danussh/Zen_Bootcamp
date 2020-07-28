// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// city name
var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=hyderabad,IN&appid=9d12636c08b2503f8e2e83ae5d51c79e';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}
var request1 = new XMLHttpRequest()
// city id
var url_string1 = 'http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=9d12636c08b2503f8e2e83ae5d51c79e';
// Open a new connection, using the GET request on the URL endpoint
request1.open('GET',url_string1 , true)
request1.send();
request1.onload = function() {
  // Begin accessing JSON data here
var data1 = JSON.parse(this.response)
console.log(data1);
}