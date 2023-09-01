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
        callback(undefined, `This is weather data information of city <br>
                            Temperature: ${data.current.temperature} F,<br>
                            Wind Speed: ${data.current.wind_speed} ,<br>
                            Wind direction: ${data.current.wind_dir} ,<br>
                            Pressure: ${data.current.pressure} ,<br>
                            Humidity: ${data.current.humidity}` )
    }
    
})}




module.exports = forecast