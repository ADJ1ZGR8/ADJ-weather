
const apiKey = "89601dc3b2c5a85e1d36a9f800b7cc0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input") 

const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
         document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

console.log(data);
document.querySelector(".city").innerHTML = data.name;

document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


if(data.weather[0].main == "Clouds"){
weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main == "Clear") {weatherIcon.src="images/clear.png";}

else if(data.weather[0].main == "Rain") {weatherIcon.src="images/rain.png"}

else if(data.weather[0].main == "Drizzle") {weatherIcon.src="images/drizzle.png"}

else if(data.weather[0].main == "Mist") {weatherIcon.src="images/mist.png"}

else if(data.weather[0].main == "snow") {weatherIcon.src="images/snow.png"}



document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                checkWeather(searchBox.value);
            }
        });


       const aaa= document.getElementById('content');
       const bbb= document.getElementById('content2');
       const ccc= document.getElementById('content3');

        function adjustContent() {
            if (window.innerWidth < 500) {
        
               aaa.style.display="block"
            //    aaa.style.paddingLeft="60px"
                bbb.style.paddingBottom="50px"
                aaa.style.paddingLeft="25%"
                ccc.style.width="100%"
                
            } else if(window.innerWidth > 501) {
                aaa.style.display="flex";
                aaa.style.alignItems="center";
                aaa.style.justifyContent="space-between";
                aaa.style.padding= "0 20px";
                aaa.style.marginTop="50px"; 
                bbb.style.paddingBottom="0px"
                aaa.style.paddingLeft="0"

            }
        }
        
        adjustContent();
        window.addEventListener('resize', adjustContent);
        