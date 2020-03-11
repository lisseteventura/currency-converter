import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow.js";

//we can use this variable to fetch info from our api
//we want to fetch api everytime we load the app
//we can do this by using useEffect
const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  //useState returns= array of options
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  //first param = function
  //second param = array
  //whenever the items in the array change, we want to rerun the effect
  //we need to populate our select option from the list of rates using state
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
      />
      <div className="equals"> = </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
      />
    </>
  );
}

export default App;
