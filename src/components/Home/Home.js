import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="country-container">
            <ul>
                {
                    countries.map(country => <Country key={country.name} country={country}></Country>)
                }
            </ul>
        </div>
    );
};

export default Home;