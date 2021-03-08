import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const history = useHistory();
    const {name, flag, capital} = props.country;
    const handleCountryDetail = () => {
        history.push(`/country/${name}`);
    }
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <p>capital: {capital}</p>
            <Link to={`/country/${name}`}>click to see detail of {name}</Link>
            <button onClick={handleCountryDetail}>click to see detail</button>
        </div>
    );
};

export default Country;