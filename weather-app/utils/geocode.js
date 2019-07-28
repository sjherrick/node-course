const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 
    '.json?access_token=pk.eyJ1IjoiaGVycmljazQxIiwiYSI6ImNqeWxtbmJ4YTA5enczbXFndXVkN3U3dWQifQ.v159Waht3pbT8QoAzLvp3g&limit=1'
    request({url, json: true}, (error, { body }) => {
        console.log('hello')
        if (error) {
            console.log('i saw you')
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            console.log('i know you')
            callback('Unable to find location!')
        } else if (!body.features) {
            console.log('i knew you')
            callback('Uh oh, spaghettios!')
        } else {
            console.log('i think i can remember your name')
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode