var today=document.getElementById('today')
var dateToday=document.getElementById('dateToday')
var loc=document.getElementById('loc')
var todayIcon=document.getElementById('todayIcon')
var todayDegree=document.getElementById('today-degree')
var description = document.getElementById('today-description')
var humdity=document.getElementById('humdity')
var wind=document.getElementById('wind')
var compass=document.getElementById('compass')
var find=document.getElementById('find')

// for nextday
var nextDay=document.getElementsByClassName('nextDay')
var iconNextday=document.getElementsByClassName('icon-nextday')
var maxDegree=document.getElementsByClassName('nextday-maxdegree')
var minDegree=document.getElementsByClassName('nextday-mindegree')
var nextDayDescription=document.getElementsByClassName('nextday-description')



var apiResponse


findCity()
   
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday",];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function displayToday(){

    let date=new Date()

    console.log(days[date.getDay()])

    today.innerHTML=days[date.getDay()];
    dateToday.innerHTML=`${date.getDate()} ${months[date.getMonth()]}`;
    loc.innerHTML=data.location.name;
    todayDegree.innerHTML=data.current.temp_c
    todayIcon.setAttribute('src',`https:${data.current.condition.icon}`)
    description.innerHTML=data.current.condition.text
    humdity.innerHTML=data.current.humidity
    wind.innerHTML =data.current.wind_kph
    compass.innerHTML =data.current.wind_dir

 
}

function displayNextDay(){
    for( let i=0; i<nextDay.length;i++){
        nextDay[i].innerHTML= days[new Date(data.forecast.forecastday[i+1].date).getDay()];
        iconNextday[i].setAttribute('src',`https:${data.forecast.forecastday[i+1].day.condition.icon}`)
        maxDegree[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
        minDegree[i].innerHTML =data.forecast.forecastday[i+1].day.mintemp_c;
        nextDayDescription[i].innerHTML =data.forecast.forecastday[i+1].day.condition.text;
    }
}


find.addEventListener("keyup",function(){
currentCity=find.value;
console.log(currentCity)
 findCity(currentCity)
})

