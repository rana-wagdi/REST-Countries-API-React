import React, {useState, useEffect} from "react";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect( ()=>{
        const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)

        }
        fetchCountryData()
    }, [])

    return (
        <div className="Countries">
            {countries.map((country)=> {
                const {numericCode, name, population, region, capital, flag} = country
                return (
                    <article key = {numericCode}>
                        <div>
                            <img src={flag} alt={name} />
                            <h4>{name}</h4>
                            <h3>Population: <span>{population}</span></h3>
                            <h3>Region: <span>{region}</span></h3>
                            <h3>Capital: <span>{capital}</span></h3>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Countries;