Here is the microservice I implemented for your project using WeatherStackAPI for your weather tracker app.

A. This function call will request for data from the API 
    <script>
        function getweather(){
        var city = document.getElementById("search").value;
        var units = document.getElementById("units").value;
        fetch("http://api.weatherstack.com/current?access_key=7a4cd620eec52b45b51904b09dab5054&query="+city+"&units="+units)
            .then(a=>a.json())
            .then(response => {
            document.getElementById("output").innerHTML="<h1>"+response.current.weather_descriptions[0]+"</h1>Temperature: "+response.current.temperature+"<br>Feels like "+response.current.feelslike+"<br>UV index: "+response.current.uv_index+"<br>Humidity: "+response.current.humidity+"<br>Cloud cover: "+response.current.cloudcover;
            });
         }
    </script>

This shows the UI for manipulating the data for what you want to recieve.
    <input placeholder="City/ZIP" id="search"> 
    <select id="units">
        <option value="f">Fahrenheit</option>
        <option value="m">Celsius</option>
    </select>
    <button onclick="getweather()">Get Weather</button>
    <div id="output"></div>

B. Once the UI is presented you can input a city or zipcode into the input fields and recieve data from the API.