import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CountriesData from './component/CountriesData'



function App() {
  const [searchCountry, setSearchCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesAfterFilt, setCountriesAfterFilt] = useState([])

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        console.log('effect', response.data)
        setCountries(response.data)
      })
  }, [])
  const searchHandler = (event) => {
    setSearchCountry(event.target.value)
    let af = countries.filter(country => country.name.toLowerCase().replace(' ', '').includes(event.target.value.toLowerCase().replace(' ', '')))
    setCountriesAfterFilt(af)
  }
  return (
    <div>
      find countries <input value={searchCountry} onChange={searchHandler} />
        debug: {searchCountry}
        debug: {countriesAfterFilt.length}
      <CountriesData countries={countriesAfterFilt} searchCountry={searchCountry} />
    </div>
  );
}

export default App;
