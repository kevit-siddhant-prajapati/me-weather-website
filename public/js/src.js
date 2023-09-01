console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('https://weatherapp-7vmb.onrender.com:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('Something went wrong')
            } else {
                document.getElementById('demo').innerHTML = " City name :"+ data.location + "</br><br> Forecast :"+ data.forecast;
            }
        }).catch(error => {
            console.log('Something went wrong')
        })
    }).catch(error => {
        document.getElementById('demo').innerHTML = "Unable to find data of this city"
    })
})

