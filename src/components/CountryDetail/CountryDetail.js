import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    const {name, flag, capital, population, area, nativeName, borders, currencies} = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setCountry(data[0]))
    }, []);

    return (
        <div className="country-details">
            <img src={flag} alt=""/>
            <h3>name: {name}</h3>
            <p>capital: {capital}</p>
            <p>capital: {population}</p>
            <p>area: {area}km<sup>2</sup></p>
            <p>native name: {nativeName}</p>
            <p>borders: </p>
            {
                borders && borders.map(border => <li>{border}</li>)
            }
            <p>currencies: {currencies && currencies[0].name + " " + currencies[0].symbol}</p>
        </div>
    );
};

export default CountryDetail;