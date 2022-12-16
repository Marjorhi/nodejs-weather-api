const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const units ='metric';
    const apiKey = '12767781338d2c1227fe3a82e47b5e4f';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
          callback('Unable to connect to the weather service!', undefined);
        } else if (response.body.cod !== 200) {
          callback('Unable to find location!', undefined);
        } else {
          callback(undefined, response.body.main.temp_max + ' is the temperature out there and the wind degree is ' + response.body.wind.deg + ' in ' + response.body.name);
        }
      });
}

module.exports=forecast




