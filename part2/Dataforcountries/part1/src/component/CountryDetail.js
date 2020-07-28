import React, { useEffect, useState } from 'react';
import Weather from './Weather'
import Axios from 'axios';

const CountryDetail = ({ country }) => {
    const weatherApi = process.env.REACT_APP_WEATHERAPI_KEY
    const [weather, setWeather] = useState([])
    useEffect(() => {
        Axios
            .get(`http://api.weatherstack.com/current?access_key=${weatherApi}&query=${country.capital}`)
            .then(Response => {
                setWeather(Response.data.current)
            })
    },[])
    return (
        <div>
            <h1>{country.name}</h1>
            <br />
    capital {country.capital}<br />
    population {country.population}<br />
            <h2>languages</h2>
            {country.languages.map(language => <li>{language.name}</li>)}<br />
            <img width='200' src={country.flag} alt={country.name} />
            <Weather weatherInfo={weather} city={country.capital}/>
        </div>
    )
}

export default CountryDetail