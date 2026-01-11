console.log("Weather App");
const input = document.querySelector('#inputtag')
const checkBtn = document.querySelector('#checkbtn')
const locat = document.querySelector('.currentLocation')
// Variables// 
const cityName = "lahore"
const keyApi = ""
// Input Btn //
 checkBtn.addEventListener('click', function(){
      weatherApi();
    })
// Fecth API //
async function weatherApi() {
    const first = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${keyApi}&units=metric`)
    const second = await first.json();
    console.log(second);
const data = ` <div class="Weather-detials">
            <h2>${input.value}</h2>
            <p class="temprature"> ${second.main.temp} °C</p> 
            </div>
            <div class="otherDetails" >
            <div class="wind">
                <p>Wind</p>
                <p>${second.wind.speed}m/s</p>
            </div>
             <div class="wind">
                <p>pressure</p>
                <p> ${second.main.pressure}hPa</p>
            </div>
             <div class="wind">
                <p>Humidity</p>
                <p> ${second.main.humidity}%</p>
            </div>
            </div>`    
            document.querySelector('.second-section').innerHTML = data
}
// Implemnt Latitude & Longitude //
async function letlongifunc(lati, longi) {
     const first = await fetch (` https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${keyApi}&units=metric`)
    const second = await first.json();
    console.log(second);
    const data = ` <div class="Weather-detials">
            <h2>${second.name}</h2>
            <p class="temprature"> ${second.main.temp}°C</p> 
            </div>
            <div class="otherDetails" >
            <div class="wind">
                <p>Wind</p>
                <p>${second.wind.speed}m/s</p>
            </div>
             <div class="wind">
                <p>pressure</p>
                <p> ${second.main.pressure}hPa</p>
            </div>
             <div class="wind">
                <p>Humidity</p>
                <p> ${second.main.humidity}%</p>
            </div>
            </div>`    
            document.querySelector('.second-section').innerHTML = data
}
// Get Latitude & Longitude //
locat.addEventListener('click', function(position){
   navigator.geolocation.getCurrentPosition( (position) =>{
    let longi =  position.coords.longitude
    let lati =  position.coords.latitude
    console.log(lati,longi)
    letlongifunc(lati,longi)
   })
})

