// Adding the event listener for when the form is submitted
let form = document.querySelector(".search__form")
form.addEventListener("submit", submitComment)

let newsApiKey = "26f164254be94981a594f850042343e7"

const populateEl = document.querySelector(".populate")



//This happens on submit
function submitComment(e) {
    e.preventDefault()
    populateEl.innerHTML = ""

    if (e.submitter.classList[1] === "search__submit") {
        let newLocation = e.target[0].value
        let getWeather = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc093e3fcb1243e3bc0182334220908&q=${newLocation}&days=3`)
        let newLocation2 = newLocation.charAt(0).toUpperCase() + newLocation.slice(1)

        getWeather
            .then (result => {

                if (newLocation2 !== result.data.location.name) {
                    let flop = document.querySelector(".search__input")
                    flop.classList.add("error")
                    return
                } else {
                

                    const weatherEl = document.createElement("div")
                    populateEl.append(weatherEl)
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


                    weatherCurrentTempEl.innerText = result.data.current.condition.text
                    weatherCurrentConditionsEl.innerText = result.data.current.temp_c + "C"
                    weatherForecastTempOneHigh.innerText = result.data.forecast.forecastday[0].day.maxtemp_c + "C"
                    weatherForecastTempOneLow.innerText = result.data.forecast.forecastday[0].day.mintemp_c + "C"
                    weatherForecastConditionsOne.innerText = result.data.forecast.forecastday[0].day.condition.text
                    weatherForecastTempTwoHigh.innerText = result.data.forecast.forecastday[1].day.maxtemp_c + "C"
                    weatherForecastTempTwoLow.innerText = result.data.forecast.forecastday[1].day.mintemp_c + "C"
                    weatherForecastConditionsTwo.innerText = result.data.forecast.forecastday[1].day.condition.text
                    weatherForecastTempThreeHigh.innerText = result.data.forecast.forecastday[2].day.maxtemp_c + "C"
                    weatherForecastTempThreeLow.innerText = result.data.forecast.forecastday[2].day.mintemp_c + "C"
                    weatherForecastConditionsThree.innerText = result.data.forecast.forecastday[2].day.condition.text
                }
                

            })

            .catch(error => {
                let flop = document.querySelector(".search__input")
                flop.classList.add("error")

            })
    } else {
        
        console.log("Nope")
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