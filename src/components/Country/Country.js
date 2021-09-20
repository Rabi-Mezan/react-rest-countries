import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population } = props.country
    return (
        <div className='single-country'>
            <h1>Name:{name} </h1>
            <h3>Capital :{capital}</h3>
            <img className='country-img' src={flag} alt="" />
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;