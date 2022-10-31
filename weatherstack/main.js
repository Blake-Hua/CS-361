// function getweather(){
//     var city = document.getElementById("search").value;
//     var units = document.getElementById("units").value;
//     fetch("http://api.weatherstack.com/current?access_key=d03084570e3f261d24dc9f105a43b659&query="+city+"&units="+units)
//         .then(a=>a.json())
//         .then(response => {
//             // document.getElementsById("image").src=reponse.current.weather_icons[0];
//             document.getElementById("output").innerHTML="<h1>"+response.current.weather_descriptions+"</h1>Temperature:"+response.current.temperature+"<br>Feels like"+response.current.feelslike+"<br>UV index:"+response.current.uv_index+"<br>Humidity:"+response.current.humidity+"<br>Cloud cover:"+response.current.cloudcover;
//         })
// }

let params = new URLSearchParams({
    access_key: '6e046fe6f4093da8d13dbdcedb655fb6',
    query: 'Oregon Corvallis',
    units: 'f'
})

// fetch(`http://api.weatherstack.com/current?${params}`)
fetch(`https://api.weatherstack.com/current?access_key=6e046fe6f4093da8d13dbdcedb655fb6&query=New%20York`)
    .then(res => res.json()).then(console.log);

// let button = document.getElementById("weatherButton")
// let printWeatherInfo = document.getElementById("output")
// button.getEventListener('onclick', getweather())
// document.write(printWeatherInfo)
