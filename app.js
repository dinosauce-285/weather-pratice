let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let temp = document.querySelector('.tempNum')
let weatherType = document.querySelector('.weather-type')
let visionValue = document.querySelector('.visionValue')
let windValue = document.querySelector('.windValue')
let humidityPercentage = document.querySelector('.humidityPercentage')
async function findLocation() {
  let lonlatUrl =   `http://api.openweathermap.org/geo/1.0/direct?q=Bristol&appid=6f58277d0ed256acd33d9a45092d6fd1`
  const locationbApiLink = await fetch(
   lonlatUrl
  );
  const location = await locationbApiLink.json();
  let latNumber = location[0].lat
  let lonNumber = location[0].lon
 
  let url  = `https://api.openweathermap.org/data/2.5/weather?lat=${latNumber}&lon=${lonNumber}&appid=6f58277d0ed256acd33d9a45092d6fd1`
  const showLocation = await fetch(url)
  const place = await showLocation.json()
  console.log(place);
city.innerText   = place.name
country.innerText   = place.sys.country
temp.innerText = (place.main.temp - 273.15).toFixed(1)
weatherType.innerText = (place.weather[0].description)
visionValue.innerText   = place.visibility + ' (m)'
windValue.innerText = place.wind.speed +' (m/s)'
humidityPercentage.innerText = place.main.humidity + ' (%)'

}
findLocation();

