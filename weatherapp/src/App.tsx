import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ weather, setWeather ] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=여러분_API_KEY`)
    .then(response => response.json())
    .then(data => {
      setWeather({
        temp: data.main.temp,
        desc: data.weather[0].description,
        icon: data.weather[0].icon
      })
    })
    .catch(err => console.log(err));
  },[]);


    return (
      <>
        <p>기온 : {weather.temp} ℃</p>
        <p>설명 : {weather['desc']}</p>
        <p>아이콘 string : {weather.icon}</p>
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨아이콘" />
    </>
    )

  
}

export default App