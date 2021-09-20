import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
            <div className='countries-display'>
                {
                    countries.map(country =>
                        <Country
                            // flag={country.flag}
                            // name={country.name}
                            // capital={country.capital}
                            // population={country.population}>
                            key={country.capital}
                            country={country}>
                        </Country>)

                }
            </div>
        </div >
    );
};

export default Countries;