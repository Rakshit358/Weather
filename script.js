const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea58f05766msh299becb4c33d03fp1aa20bjsn18a93388f163',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city;
fetch(url+city,options)
    .then(response => response.json())
	.then(response => {
	 	console.log(response)
	    cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		sunrise.innerHTML = response.sunrise
		sunrise2.innerHTML = response.cloud_pct
		sunset.innerHTML = response.sunset
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML  = response.wind_degrees
		humidity.innerHTML = response.humidity
		feels_like.innerHTML = response.feels_like
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})
getWeather("Delhi");
