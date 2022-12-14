const request = require('request')
const apiKey = '12767781338d2c1227fe3a82e47b5e4f';
const city = 'Sorsogon';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

//Making http request
request({ url:url, json:true }, (error, response) => {
    console.log(response.body.main.temp + ' is the temperature out there and the wind degree is ' + response.body.wind.deg) //Printing out the temperature and wind degree
})


