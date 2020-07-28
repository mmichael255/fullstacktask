import React, { useState, useEffect } from 'react';
import CountryDetail from './CountryDetail'

const CountriesData = ({ countries, searchCountry }) => {
    const [show, setShow] = useState()
    const [len, setLen] = useState(-1)
    if (len !== searchCountry.length) {
      if (show !== undefined) {
        setShow()
        setLen(-1)
      }
    }
    console.log('countriesAf', countries)
    console.log('len', len)
    const handlerClick = (country, e) => {
      e.preventDefault()
      console.log('click', [country])
      setShow(country)
      setLen(searchCountry.length)
    }
    if (show === undefined) {
      if (countries.length > 10) {
        return (
          <div>
            Too many matches,specify another filter
          </div>
        )
      } else if (countries.length <= 10 && countries.length > 1) {
        let have = 0
        countries.forEach(country => {
          if (country.name.toLowerCase().replace(' ', '') === searchCountry.toLowerCase().replace(' ', '')) {
            have = country
          }
        });
        if (have === 0) {
          return (
            <div>
              {countries.map((country) => {
                return (
                  <div key = {country.alpha3Code}>
                    <ul >{country.name} <button onClick={(e) => handlerClick(country, e)}>show</button></ul>
                  </div>
                )
              })}
            </div>
          )
        } else {
          return (
            <CountryDetail country={have} />
          )
        }
      } else if (countries.length === 1) {
        return (
          <CountryDetail country={countries[0]} />
        )
      } else {
        return (
          <div>
  
          </div>
        )
      }
    } else {
      return (
        <CountryDetail country={show} />
      )
    }
  }

export default CountriesData
  