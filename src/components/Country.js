import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Country.css";

export default function Country({myStyle}) {
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectRegion, setSelectRegion] = useState("All");
  

  const getCountries = async () => {
    try {
      let url = "https://restcountries.com/v3.1/all";

      if (searchName) {
        url = `https://restcountries.com/v3.1/name/${searchName}`;
      } else if (selectRegion !== "All") {
        url = `https://restcountries.com/v3.1/region/${selectRegion}`;
      }

      const res = await axios.get(url);
      setCountries(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getCountries();
  }, );

  const handleSearchChange = (value) => {
    setSearchName(value);
  };

  const handleSelectChange = (value) => {
    setSelectRegion(value);
  };

  

  return (
    <>
      

      <div className="search-wrapper mx-3 py-4" >
        <label htmlFor="search-form" >
          <input
            type="search"
            name="search-form"
            className={`search-input `}
            placeholder="Search for a country..."
            value={searchName}
            onChange={(e) => handleSearchChange(e.target.value)}

          />
        </label>
        <div className="select">
          <select
            value={selectRegion}
            onChange={(e) => handleSelectChange(e.target.value)}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value="All">Filter By Region</option>
          {countries
            .map((country) => country.region)
            .filter((region, index, self) => self.indexOf(region) === index)
            .map((uniqueRegion) => (
              <option key={uniqueRegion} value={uniqueRegion}>
                {uniqueRegion}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
      </div>

      <div className="container mx-1 row">
        {isError !== "" && <h2>{isError}</h2>}
        {countries.map((all) => {
          const { png } = all.flags;
          const { common } = all.name;
          const {
            population,
            region,
            capital,
            subregion,
            tld,
            languages,
            borders,
          } = all;
          const { currencies } = all;
          
          return (
            <div key={common} className="container my-5 col-md-3">
              <Link
                className="nav-link"
                aria-current="page"
                to="/CountryDetails"
                relative="path"
                state={{
                  png,
                  common,
                  population,
                  region,
                  capital,
                  subregion,
                  tld,
                  languages,
                  currencies,
                  borders,
                }}
              >
                <div className="card border-light">
                  <div className="imgcontainer">
                    <img
                      src={png}
                      className="card-img-top h-100 d-inline-block"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{common}</h5>
                    <div>
                      <p className="card-text">
                        Population: {population}
                        <br />
                        Region: {region}
                        <br />
                        Capital: {capital}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
