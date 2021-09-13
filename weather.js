//Complete the Weather API Backend part using openweathermap api
var apiKey = '8325a2e4daf10ee33af762ea4ea5ce91';
let msg = document.getElementById('msg');
const d = new Date();
const months = ["00","01","02","03","04","05","06","07","08","09","10","11","12"];
const hour =["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]
document.getElementById("date1").innerHTML = `${d.getDate()}-${months[d.getMonth()+1]}-${d.getFullYear()}`;
document.getElementById("time1").innerHTML = `${hour[d.getHours()]}:${d.getMinutes()}`;

function getData(){

    var city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('temp').innerHTML = `Temperature: ${data.main.temp}°c `;

        document.getElementById('name').innerHTML =`${data.name}`;

        document.getElementById('weather').innerHTML = `${data.weather[0].description}`;
        
        var icon = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`

        document.getElementById('icon').src =icon ;

        document.getElementById("hi-low").innerHTML =`Max-Min temperature: ${data.main.temp_max}°c /${data.main.temp_min}°c `;
    })
    .catch(()=>
    msg.textContent ="Please Enter Valid city name"
    )

}