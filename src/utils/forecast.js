const request = require('request')
const forecast = (let, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=10272cc111841091769853fddfb095bd&query="+let+","+long;

    request(url, async (error, response)=> {
        const data = JSON.parse(response.body);
        //console.log(data)
    if(error){
        await data
        callback('Unable to connect with api Services'+ error, undefined)
        //callback()
    } else if(response.body.length === 0){
        await data
        callback('Unable to get data of forecast' + response.body.error, undefined)
    } else {
        await data
        callback(undefined, `This is weather data information of city ${data.location.name} which in country ${data.location.country}
                            it's cordinates are (${data.location.lat},${data.location.lon})
                            Temperature: ${data.current.temperature} ,
                            Wind Speed: ${data.current.wind_speed} ,
                            Wind direction: ${data.current.wind_dir} ,
                            Pressure: ${data.current.pressure} ,
                            Humidity: ${data.current.humidity}` )
    }
    
})}




module.exports = forecast