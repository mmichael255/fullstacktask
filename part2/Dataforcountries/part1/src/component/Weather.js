import React from 'react';

const Weather = ({weatherInfo,city}) => {
    console.log('weatherInfo',weatherInfo.temperature)
    return(
        <div>
            <h2>Weather in {city}</h2>
            <b>temperature:</b>{weatherInfo.temperature} Celcius<br/>
            <img width='50' src= {weatherInfo.weather_icons}/><br/>
            <b>wind:</b>{weatherInfo.wind_speed} mph
            <b> direction:</b>{weatherInfo.wind_dir}
        </div>
    )
}
export default Weather