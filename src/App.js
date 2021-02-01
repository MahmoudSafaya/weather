import './App.css';
import React, { useState } from 'react';

// Please add you own api key 
const api = {
  key: 'a77310ff79aee5ffdf371098704c1e11',
  base: 'https://api.openweathermap.org/data/2.5/weather?q='
}

function App() {

let [query, setQuery]  = useState('');
const [weather, setWeather] = useState({});


const search = evt => {
  if(evt.key === 'Enter') {
    fetch(`${api.base}${query}&units=metric&appid=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
      console.log(result);
    });
  }
}

const d = new Date();
const date = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;


  return (
    <div className={(typeof weather.main != 'undefined') ? 
     (weather.main.temp > 16) ? 'app warm' : 'app' : 'app'} >
      <main>
        <div className="search">
          <input 
            type="text" 
            placeholder="Search.."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        <div className="landing-content">
          Enter date in the search input and press "enter" key.
        </div>
      
        {(typeof weather.main != 'undefined') ? 
        (  
        <div className="info">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{date}</div>
        <div className="temp">{Math.round(weather.main.temp)}°C</div>
        <div className="cloud">{weather.weather[0].main}</div>
      </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
