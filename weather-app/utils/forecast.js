const request = require('request')

// const url = 'https://api.darksky.net/forecast/a5b5e0522fc2f1ab9095d81e7ddedbf3/37.8267,-122?units=si'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         const weather = response.body
//         console.log(weather.daily.data[0].summary + ' It is currently ' + weather.currently.temperature + ' degrees C out. There is ' + 
//         weather.currently.precipProbability + '% change of rain.')
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a5b5e0522fc2f1ab9095d81e7ddedbf3/' + latitude + ',' + longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location!')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' + 
            body.currently.precipProbability + '% change of rain.')
        }
    })
}

module.exports = forecast