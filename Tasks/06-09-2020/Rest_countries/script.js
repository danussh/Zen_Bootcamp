
    let countriesData = []

    let p =  fetch("https://restcountries.eu/rest/v2/all")
    p.then(function(response){
      return response.json()
    })
    .then(function(data){
        countriesData = data
        createCards()
    })
    .catch(function(error){
        console.log(error)
    })

    function createCards(){
        for (let i=0; i<countriesData.length; i++){
            let currentCountry = countriesData[i]
            let card = document.createElement("div")
            card.setAttribute("class", "card text-center mt-5 ")
            card.setAttribute("style", "width: 18rem; ")
            row.append(card)

            let cardTitle = document.createElement("div")
            cardTitle.setAttribute("class", "card-header header")
            cardTitle.innerText = currentCountry.name
            card.appendChild(cardTitle)

            let cardBody = document.createElement("div")
            cardBody.setAttribute("class", " body card-body")
            cardBody.setAttribute("style", "padding-left:10px;padding-right:10px")
            card.appendChild(cardBody)

            let cardImage = document.createElement("img")
            cardImage.setAttribute("class", "card-image")
            cardImage.setAttribute("src", currentCountry.flag)
            cardImage.setAttribute("alt", "Flag Image")
            cardImage.setAttribute("width", "250px;")
            cardImage.setAttribute("height", "180px;")
            cardBody.appendChild(cardImage)

            let cardText1 = document.createElement("p")
            cardText1.setAttribute("class", "text card-text")
            cardText1.innerText = "Capital: " + currentCountry.capital
            cardBody.appendChild(cardText1)

            let cardText2 = document.createElement("p")
            cardText2.setAttribute("class", "text card-text")
            cardText2.innerText = "Region: " + currentCountry.region
            cardBody.appendChild(cardText2)

            let cardText3 = document.createElement("p")
            cardText3.setAttribute("class", "text card-text")
            cardText3.innerText = "Country Code: " + currentCountry.alpha3Code
            cardBody.appendChild(cardText3)

            let button1 = document.createElement("a")
            button1.setAttribute("class", "text btn btn-primary")
            button1.innerText = "Click for Weather"
            button1.setAttribute("data-toggle", "modal")
            button1.setAttribute("data-target", "#weatherModal")
            button1.setAttribute("id", currentCountry.capital)
            button1.setAttribute("onclick", "getWeatherDetails(this.id)")
            cardBody.appendChild(button1)

        }
    }

    function getWeatherDetails(value){
        document.getElementById("weatherModalLongTitle").innerHTML = "Weather details of " + value
        let URL = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=9d12636c08b2503f8e2e83ae5d51c79e"
        let res =  fetch(URL)
        res.then(function(response){
        return response.json()
        })
        .then(function(data){
            document.getElementById("weatherVal").innerHTML = data.weather[0].description
            document.getElementById("tempratureVal").innerHTML = Math.floor((+data.main.temp - 273.15) * 100) / 100 + "&#8451;"
            document.getElementById("temperatureFeelLikeVal").innerHTML = Math.floor((+data.main.feels_like - 273.15) * 100) / 100 + "&#8451;"
            document.getElementById("pressureVal").innerHTML = data.main.pressure + " hPA"
            document.getElementById("humidityVal").innerHTML =data.main.humidity + "%"
        })
        .catch(function(error){
            console.log(error)
        })
    }
