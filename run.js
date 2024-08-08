const apiKey="c5ab68127314b25a12610d133c4068"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

    
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
    // fetch data from the API
    async function checkWeather (city)
    {
        const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
        var data = await response.json();

        document.querySelector('.weather').style.display="flex"
        // // display data
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"; 
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed +"km/h";
        
        // change weather icon
        if(data.weather[1].main == "Clouds")
        { 
            weatherIcon.src="./images/clouds.png"
        }
        else if(data.weather[1].main == "Clear")
        {
            weatherIcon.src="./images/clear.png"
        }
        else if(data.weather[1].main == "Rain")
        {
            weatherIcon.src="./images/rain.png"
        }
        else if(data.weather[1].main == "Drizzle")
        {
            weatherIcon.src="./images/drizzle.png"
        }
        else if(data.weather[1].main == "Mist")
        {
            weatherIcon.src="./images/mist.png"
        }
    }
searchBtn.addEventListener("click", () => 
{ checkWeather (searchBox.value); 
})
