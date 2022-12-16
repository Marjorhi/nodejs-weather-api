const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const cityName = process.argv[2] //Accept location via command line argument

if (!cityName) {
    console.log ('Please provide an address') //Get an error message when no address is provided
} else {
    geoCode(cityName, (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecasData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecasData)
    })
})
}
console.log(process.argv)







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

