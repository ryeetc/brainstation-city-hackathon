// Adding the event listener for when the form is submitted
let form = document.querySelector(".search__form")
form.addEventListener("submit", submitComment)

let bodyEl = document.getElementsByName("body")

let newsApi = "https://newsapi.org/v2/everything?apiKey=281fce62f2344944a5c44b727007e4b5&q=toronto&searchin=title"

let flop = document.querySelector(".search__input")

let brainArray = ["Miami", "Vancouver", "Seattle", "Washington", "Dubai", "Shanghai", "Tokyo", "Sydney", "Ottawa", "Montreal", "Berlin", "London"]






//This happens on submit
function submitComment(e) {
    e.preventDefault()

    if (document.querySelector(".error")) {
        flop.classList.remove("error")
    }
    
    const populateEl = document.querySelector(".populate")

    populateEl.innerHTML = ""

    const populateTopEl = document.createElement("div")
    populateTopEl.classList.add("populate__top")
    populateEl.append(populateTopEl)

    const populateTopTitle = document.createElement("h3")
    populateTopTitle.classList.add("populate__top--title")
    populateTopEl.append(populateTopTitle)

    const newsCard = document.createElement("div")
    populateTopEl.append(newsCard)


    populateEl.append(populateTopEl)
    
    const populateBotEl = document.createElement("div");
    populateBotEl.classList.add("populate__bottom");
    populateEl.appendChild(populateBotEl);



    if (e.submitter.classList[1] === "search__submit") {
        let newLocation = e.target[0].value
        let getWeather = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc093e3fcb1243e3bc0182334220908&q=${newLocation}&days=3`)
        let newLocation2 = newLocation.charAt(0).toUpperCase() + newLocation.slice(1)
        let getBackgroundPic = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${newLocation2}`)
        let getTitle = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc093e3fcb1243e3bc0182334220908&q=${newLocation2}&days=3`)
        let newsApi = axios.get(`https://newsapi.org/v2/everything?apiKey=281fce62f2344944a5c44b727007e4b5&q=${newLocation2}&searchin=title`)
    
        
       

        getTitle
            .then(result =>{

                let locationTitle = result.data.location.name
                populateTopTitle.innerText = locationTitle
                
        
            })
            .catch(error => {
                let flop = document.querySelector(".search__input")
                flop.classList.add("error")
                populateEl.innerHTML = ""

            })

            newsApi 
            .then (result => {
                
                let newsTitle = result.data.articles[0].title
                let newsDesc = result.data.articles[0].content
                const spanTitle = document.createElement("span")
                const spanDesc = document.createElement("p")
                
                let formattedNews = newsDesc.slice(0,newsDesc.length - 14) + "..."
                newsCard.append(spanTitle)
                newsCard.append(spanDesc)

                spanTitle.innerText = newsTitle
                spanDesc.innerText =formattedNews
                             

            })
            .catch(error => {
                let flop = document.querySelector(".search__input")
                flop.classList.add("error")
                populateEl.innerHTML = ""

            })

        
        getBackgroundPic
            .then(result => {
                let backgroundPic =result.data.results[0].urls.raw
                document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundPic})`
                // document.body.style.backgroundImage = `url(${backgroundPic})`
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
                
                
               
                
            })
            .catch(error => {
                let flop = document.querySelector(".search__input")
                flop.classList.add("error")
                populateEl.innerHTML = ""

            })




        getWeather
            .then (result => {

                if (newLocation2 !== result.data.location.name) {
                    let flop = document.querySelector(".search__input")
                    flop.classList.add("error")
                    populateEl.innerHTML = ""
                    return
                } else {

                    const weatherEl = document.createElement("div")
                    populateBotEl.append(weatherEl)
                    weatherEl.classList.add("weather")

                    const weatherCurrentEl = document.createElement("div")
                    weatherEl.append(weatherCurrentEl)
                    weatherCurrentEl.classList.add("weather__current")

                    const weatherCurrentTempEl = document.createElement("span")
                    weatherCurrentEl.append(weatherCurrentTempEl)
                    weatherCurrentTempEl.classList.add("weather__current--temp")

                    const weatherCurrentConditionsEl = document.createElement("span")
                    weatherCurrentEl.append(weatherCurrentConditionsEl)
                    weatherCurrentConditionsEl.classList.add("weather__current--conditions")

                    const weatherForecast = document.createElement("div")
                    weatherEl.append(weatherForecast)
                    weatherForecast.classList.add("weather__forecast")

                    const weatherForecastDayOne = document.createElement("div")
                    weatherForecast.append(weatherForecastDayOne)
                    weatherForecastDayOne.classList.add("weather__forecast--day")

                    const weatherForecastTempOneHigh = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastTempOneHigh)
                    weatherForecastTempOneHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempOneLow = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastTempOneLow)
                    weatherForecastTempOneLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsOne = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastConditionsOne)
                    weatherForecastConditionsOne.classList.add("weather__forecast--conditions")

                    const weatherForecastDayTwo = document.createElement("div")
                    weatherForecast.append(weatherForecastDayTwo)
                    weatherForecastDayTwo.classList.add("weather__forecast--day")

                    const weatherForecastTempTwoHigh = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastTempTwoHigh)
                    weatherForecastTempTwoHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempTwoLow = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastTempTwoLow)
                    weatherForecastTempTwoLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsTwo = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastConditionsTwo)
                    weatherForecastConditionsTwo.classList.add("weather__forecast--conditions")

                    const weatherForecastDayThree = document.createElement("div")
                    weatherForecast.append(weatherForecastDayThree)
                    weatherForecastDayThree.classList.add("weather__forecast--day")

                    const weatherForecastTempThreeHigh = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastTempThreeHigh)
                    weatherForecastTempThreeHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempThreeLow = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastTempThreeLow)
                    weatherForecastTempThreeLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsThree = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastConditionsThree)
                    weatherForecastConditionsThree.classList.add("weather__forecast--conditions")

                    

                    let weatherCurrentPic = result.data.current.condition.text

                    let weatherIndicator = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${weatherCurrentPic}%20weather`)

                    weatherIndicator
                        .then(result => {
                            let weatherBackground = result.data.results[0].urls.raw
                            document.querySelector(".weather").style.backgroundImage = `url(${weatherBackground})`
                            document.querySelector(".weather").style.backgroundSize = "cover"
                            document.querySelector(".weather").style.backgroundPosition = "center"

                        })

                    weatherCurrentTempEl.innerText = weatherCurrentPic
                    weatherCurrentConditionsEl.innerText = result.data.current.temp_c + "C"
                    weatherForecastTempOneHigh.innerText = "High: " + result.data.forecast.forecastday[0].day.maxtemp_c + "C"
                    weatherForecastTempOneLow.innerText =  "Low: " + result.data.forecast.forecastday[0].day.mintemp_c + "C"
                    weatherForecastConditionsOne.innerText = "Conditions: " + result.data.forecast.forecastday[0].day.condition.text
                    weatherForecastTempTwoHigh.innerText = "High: " +  result.data.forecast.forecastday[1].day.maxtemp_c + "C"
                    weatherForecastTempTwoLow.innerText = "Low: " + result.data.forecast.forecastday[1].day.mintemp_c + "C"
                    weatherForecastConditionsTwo.innerText = "Conditions: " + result.data.forecast.forecastday[1].day.condition.text
                    weatherForecastTempThreeHigh.innerText = "High: " + result.data.forecast.forecastday[2].day.maxtemp_c + "C"
                    weatherForecastTempThreeLow.innerText = "Low: " + result.data.forecast.forecastday[2].day.mintemp_c + "C"
                    weatherForecastConditionsThree.innerText = "Conditions: " + result.data.forecast.forecastday[2].day.condition.text


                    let newLocation3 = newLocation2 + " city"
                    const mapImageLocation = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${newLocation3}`)
                      
                    
                    mapImageLocation
                        .then (result => {
                            const mapImage = result.data.results[0].urls.raw;
                            const mapEl = document.createElement("div");
                            mapEl.classList.add("map");
                            mapEl.style.backgroundImage = `url(${mapImage})`;
                            mapEl.style.backgroundSize = "cover";
                            mapEl.style.backgroundPosition = "center";
                            populateBotEl.appendChild(mapEl);
                        })
                }
                

            })

            .catch(error => {
            

            })
    } else {
        let rando = Math.floor(Math.random() * 11)
        let newLocation2 = brainArray[rando]
        let getWeather = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc093e3fcb1243e3bc0182334220908&q=${newLocation2}&days=3`)
        
        let getBackgroundPic = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${newLocation2}`)
        let getTitle = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc093e3fcb1243e3bc0182334220908&q=${newLocation2}&days=3`)
        let newsApi = axios.get(`https://newsapi.org/v2/everything?apiKey=281fce62f2344944a5c44b727007e4b5&q=${newLocation2}&searchin=title`)
    
        
       

        getTitle
            .then(result =>{

                let locationTitle = result.data.location.name
                populateTopTitle.innerText = locationTitle
        
            })
            

            newsApi 
            .then (result => {
                let newsTitle = result.data.articles[0].title
                let newsDesc = result.data.articles[0].content
                let newsLink = result.data.articles[0].url
                const spanTitle = document.createElement("span")
                const spanDesc = document.createElement("p")
                let formattedNews = newsDesc.slice(0,newsDesc.length - 14)
                newsCard.append(spanTitle)
                newsCard.append(spanDesc)
                spanTitle.innerText = newsTitle
                spanDesc.innerText =formattedNews


                

            })
            

        
        getBackgroundPic
            .then(result => {
                let backgroundPic =result.data.results[0].urls.raw
                document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundPic})`
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundPosition = "center"
                
                
               
                
            })
        




        getWeather
            .then (result => {

                if (newLocation2 !== result.data.location.name) {
                    let flop = document.querySelector(".search__input")
                    flop.classList.add("error")
                    populateEl.innerHTML = ""
                    return
                } else {

                    const weatherEl = document.createElement("div")
                    populateBotEl.append(weatherEl)
                    weatherEl.classList.add("weather")

                    const weatherCurrentEl = document.createElement("div")
                    weatherEl.append(weatherCurrentEl)
                    weatherCurrentEl.classList.add("weather__current")

                    const weatherCurrentTempEl = document.createElement("span")
                    weatherCurrentEl.append(weatherCurrentTempEl)
                    weatherCurrentTempEl.classList.add("weather__current--temp")

                    const weatherCurrentConditionsEl = document.createElement("span")
                    weatherCurrentEl.append(weatherCurrentConditionsEl)
                    weatherCurrentConditionsEl.classList.add("weather__current--conditions")

                    const weatherForecast = document.createElement("div")
                    weatherEl.append(weatherForecast)
                    weatherForecast.classList.add("weather__forecast")

                    const weatherForecastDayOne = document.createElement("div")
                    weatherForecast.append(weatherForecastDayOne)
                    weatherForecastDayOne.classList.add("weather__forecast--day")

                    const weatherForecastTempOneHigh = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastTempOneHigh)
                    weatherForecastTempOneHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempOneLow = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastTempOneLow)
                    weatherForecastTempOneLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsOne = document.createElement("span")
                    weatherForecastDayOne.append(weatherForecastConditionsOne)
                    weatherForecastConditionsOne.classList.add("weather__forecast--conditions")

                    const weatherForecastDayTwo = document.createElement("div")
                    weatherForecast.append(weatherForecastDayTwo)
                    weatherForecastDayTwo.classList.add("weather__forecast--day")

                    const weatherForecastTempTwoHigh = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastTempTwoHigh)
                    weatherForecastTempTwoHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempTwoLow = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastTempTwoLow)
                    weatherForecastTempTwoLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsTwo = document.createElement("span")
                    weatherForecastDayTwo.append(weatherForecastConditionsTwo)
                    weatherForecastConditionsTwo.classList.add("weather__forecast--conditions")

                    const weatherForecastDayThree = document.createElement("div")
                    weatherForecast.append(weatherForecastDayThree)
                    weatherForecastDayThree.classList.add("weather__forecast--day")

                    const weatherForecastTempThreeHigh = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastTempThreeHigh)
                    weatherForecastTempThreeHigh.classList.add("weather__forecast--temp-high")

                    const weatherForecastTempThreeLow = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastTempThreeLow)
                    weatherForecastTempThreeLow.classList.add("weather__forecast--temp-low")

                    const weatherForecastConditionsThree = document.createElement("span")
                    weatherForecastDayThree.append(weatherForecastConditionsThree)
                    weatherForecastConditionsThree.classList.add("weather__forecast--conditions")

                    

                    let weatherCurrentPic = result.data.current.condition.text

                    let weatherIndicator = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${weatherCurrentPic}%20weather`)

                    weatherIndicator
                        .then(result => {
                            let weatherBackground = result.data.results[0].urls.raw
                            document.querySelector(".weather").style.backgroundImage = `url(${weatherBackground})`
                            document.querySelector(".weather").style.backgroundSize = "cover"
                            document.querySelector(".weather").style.backgroundPosition = "center"

                        })

                    weatherCurrentTempEl.innerText = weatherCurrentPic
                    weatherCurrentConditionsEl.innerText = result.data.current.temp_c + "C"
                    weatherForecastTempOneHigh.innerText = "High: " + result.data.forecast.forecastday[0].day.maxtemp_c + "C"
                    weatherForecastTempOneLow.innerText =  "Low: " + result.data.forecast.forecastday[0].day.mintemp_c + "C"
                    weatherForecastConditionsOne.innerText = "Conditions: " + result.data.forecast.forecastday[0].day.condition.text
                    weatherForecastTempTwoHigh.innerText = "High: " +  result.data.forecast.forecastday[1].day.maxtemp_c + "C"
                    weatherForecastTempTwoLow.innerText = "Low: " + result.data.forecast.forecastday[1].day.mintemp_c + "C"
                    weatherForecastConditionsTwo.innerText = "Conditions: " + result.data.forecast.forecastday[1].day.condition.text
                    weatherForecastTempThreeHigh.innerText = "High: " + result.data.forecast.forecastday[2].day.maxtemp_c + "C"
                    weatherForecastTempThreeLow.innerText = "Low: " + result.data.forecast.forecastday[2].day.mintemp_c + "C"
                    weatherForecastConditionsThree.innerText = "Conditions: " + result.data.forecast.forecastday[2].day.condition.text



                    const mapImageLocation = axios.get(`https://api.unsplash.com/search/photos/?client_id=l7qR3naC2-hfuzeYwHg5TJaG-8tGOdKpDqEXC2RPdDA&query=${newLocation2}%20satellite`)
                      
                    
                    mapImageLocation
                        .then (result => {
                            const mapImage = result.data.results[0].urls.raw;
                    
                            const mapEl = document.createElement("div");
                            mapEl.classList.add("map");
                            mapEl.style.backgroundImage = `url(${mapImage})`;
                            mapEl.style.backgroundSize = "cover";
                            mapEl.style.backgroundPosition = "center";
                            populateBotEl.appendChild(mapEl);
                        })
                }
                

            })

           
        
    }
    
    form.reset()

}

/* 
    <div class="city">Toronto</div>
    <div class="wiki">
        <p class="wiki__info">Wiki</p>
    </div>
    <div class="weather">
        <div class="weather__current">
            <span class="weather__current--temp"></span>
            <span class="weather__current--conditions"></span>
        </div>
        <div class="weather__forecast">
            <div class="weather__forecast--day">
                <span class="weather__forecast--temp"
                <span class="weather__forecast--conditions"
            </div>
            <div class="weather__forecast--day">
                <span class="weather__forecast--temp"
                <span class="weather__forecast--conditions"
            </div>
            <div class="weather__forecast--day">
                <span class="weather__forecast--temp"
                <span class="weather__forecast--conditions"
            </div>
    </div>
    <div class="photo-gallery"></div>
 */