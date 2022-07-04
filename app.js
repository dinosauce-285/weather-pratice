let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let temp = document.querySelector('.tempNum')
let weatherType = document.querySelector('.weather-type')
let visionValue = document.querySelector('.visionValue')
let windValue = document.querySelector('.windValue')
let humidityPercentage = document.querySelector('.humidityPercentage')
let time = document.querySelector('.time')
search.addEventListener('keypress', e => {

  if (e.keyCode == 13) {
    searchResult = search.value
  }
  localStorage.setItem('search', searchResult)
} )
async function findLocation() {
  let searchResult = localStorage.getItem('search')
  console.log(searchResult);
  let lonlatUrl =   `http://api.openweathermap.org/geo/1.0/direct?q=${searchResult}&appid=6f58277d0ed256acd33d9a45092d6fd1`
  const locationbApiLink = await fetch(
   lonlatUrl
  );
  const location = await locationbApiLink.json();
  console.log(location);
  let latNumber = location[0].lat
  let lonNumber = location[0].lon
 
  let url  = `https://api.openweathermap.org/data/2.5/weather?lat=${latNumber}&lon=${lonNumber}&appid=6f58277d0ed256acd33d9a45092d6fd1`
  const showLocation = await fetch(url)
  const place = await showLocation.json()
  console.log(place);
city.innerText   = location[0].name
country.innerText   = place.sys.country
temp.innerText = Math.round((place.main.temp - 273.15)) 
weatherType.innerText = (place.weather[0].description)
visionValue.innerText   = place.visibility + ' (m)'
windValue.innerText = place.wind.speed +' (m/s)'
humidityPercentage.innerText = place.main.humidity + ' (%)'
let date = new Date().toLocaleString('vi')
console.log(date);
time.innerText = date
localStorage.removeItem('search')
}
findLocation();

