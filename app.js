const request = require('request')
const apiKey = '12767781338d2c1227fe3a82e47b5e4f';
const city = 'Sorsogon';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

//Making http request
request( {url:url}, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data)
})


