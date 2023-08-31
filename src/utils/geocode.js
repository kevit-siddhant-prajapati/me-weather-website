const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2lkZGhhbnQtcHJhamFwYXRpLWtldml0IiwiYSI6ImNsbHVpdDdlODFwamkzbG5xdzBteGZzMXIifQ.-_bNvqnVIkQ9z-0WjAoUfw';

    request(url, async (error, response)=> {
        const data = JSON.parse(response.body);
        // console.log(data)
        if(error){
            await data;
            callback('Unable to connect with api '+ error, undefined)
        } else if(response.body.length === 0){
            await data
            callback('Unable to get data' + response.body.error, undefined)
        } else {
            await data
            callback(undefined, {
                latitude : data.features[0].center[0],
                longitude : data.features[0].center[1],
                location : data.features[0].text
            })
        }
    })
}

module.exports = geocode