Here is the microservice I implemented for your project using WeatherStackAPI for your weather tracker app.

A. To request for data from the microservice you have to make a fetch call to the API. For example 

fetch(`https://api.weatherstack.com/current?access_key=6e046fe6f4093da8d13dbdcedb655fb6&query=New%20York`)
    .then(res => res.json()).then(console.log);

This will request for data in the console.

B. Once the UI is presented you can input a city or zipcode into the input fields and recieve data from the API.