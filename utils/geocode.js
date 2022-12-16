const request = require('request')

const geoCode = (cityName, callback) => {
    const units ='metric';
    const apiKey = '12767781338d2c1227fe3a82e47b5e4f';
    const geocodeURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

    
    request({ url: geocodeURL, json:true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined) //Callback with an error message
        } else if (response.body.name === false) {
            callback('Try another search', undefined) //Callback with an error message
        } else {
            callback(undefined, {
                latitude : response.body.coord.lat,
                longitude : response.body.coord.lon,
                location : response.body.name
            }) //Callback with the weather data
        }
    })
}

module.exports=geoCode