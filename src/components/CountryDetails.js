import React from "react";
import { useLocation } from "react-router-dom";
import "./Country.css";
import { Link } from "react-router-dom";
export default function CountryDetails() {
  const { state } = useLocation();

  console.log("state", state);

  const langs = Object.values(state.languages);
  console.log("Langs:", Object.values(state.languages));

  // const borders = Array[state?.borders];

  const currency = Object.values(state.currencies);
  return (
    <div className="px-5 my-5">
      <Link to={-1}>
        {" "}
        <button className="btn btn-md button btn-light my-5 mx-2">
          <div className="left-arrow d-flex align-self-end">
            &larr; <img src="countries-list\src\images\leftarrow.png" alt="" />
            Back
          </div>
        </button>{" "}
      </Link>
      <div className="d-flex justify-content-between py-5 country-details-mobile">
        <div className=" d-flex country-details">
          <div className="container justify-content-start img-container">
            <img
              src={state.png}
              className="card-img-top h-100 d-inline-block"
              alt="..."
            />
          </div>
        </div>
        <div className="w-100 common-name-mobile">
          <p className="common-name">
            <b>{`${state.common}`}</b>
          </p>
          <div className="country-sub-details">
            <div className="d-flex">
              <p>
                <b>Native Name: </b>
                {`${state.common}`}
              </p>
            </div>
            <div className="d-flex ">
              <p>
                <b>Population: </b> {`${state.population}`}
              </p>
            </div>

            {console.log("Lang:", state)}
            <div className="d-flex">
              <p>
                <b>Region:</b> {`${state.region}`}
              </p>
            </div>

            <p>
              <b>Sub Region: </b> {`${state.subregion}`}{" "}
            </p>
            <p>
              <b>Capital: </b> {`${state.capital}`}
            </p>
          </div>
        </div>
        <div className="py-5 tld-mobile">
          <div className=" py-3 tldcr-mobile">
            <p className="tldcr">
              <b>Top Level Domain: </b>
              <div className="mx-1">{`${state.tld}`}</div>
            </p>
            <div className="d-flex">
              <p>
                <b>Currencies: </b>{" "}
                {currency.map((value, index) =>
                  index + 1 === langs.length ? value.name : value.name + ", "
                )}
              </p>
            </div>
            <p className="text-center">
              <b>Languages: </b>{" "}
              {langs.map((value, index) =>
                index + 1 === langs.length ? value : value + ", "
              )}
            </p>
          </div>

          {console.log("Lang:", state)}
        </div>
      </div>
      <div className="my-5 d-flex justify-content-around border-countries text-center">
        <div className="country-card d-flex">
          <b>Border Countries:</b>
        </div>
        {state?.borders?.map((country) => {
          return (
            <div className="dflex justify-content-between my-3 px-5 ">
              <button className="btn btn-light d-flex">{country}</button>

              <Link to="/ObjectValidation">
                <button className="btn btn-light">
                  Click
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
