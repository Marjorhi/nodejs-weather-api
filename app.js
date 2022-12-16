const request = require('request')
const apiKey = '12767781338d2c1227fe3a82e47b5e4f';

// const url = `http://api.openweathermap.org/data/2.5/weather?q=&appid=${apiKey}&units=metric`

// //Making http request
// request({ url:url, json:true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect');
//       } else if (response.body.error) {
//         console.log('Unable to find location')
//       }
//       else {
//         console.log(response.body.main.temp + ' is the temperature out there and the wind degree is ' + response.body.wind.deg);
//     }
// })

// //Customizing http request
// const geocodeURL = `http://api.openweathermap.org/data/2.5/weather?q=Sorsogon+City&appid=${apiKey}&units=metric`

// request({ url:geocodeURL, json:true }, (error, response) => {
//     const latitude = response.body.coord.lat
//     const longitude = response.body.coord.lon
    
//     console.log(latitude, longitude)
// })

const geoCode = (cityName, callback) => {
    const units ='metric';
    const geocodeURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

    
    request({ url: geocodeURL, json:true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined) //Callback with an error message
        } else if (response.body.name === false) {
            callback('Try another search', undefined) //Callback with an error message
        } 
    })
}

geoCode('Sorsogon City', (error, data) => {
    if (error) {
        console.log('Error', error);
      } else {
        console.log('Data',data);
      }
})