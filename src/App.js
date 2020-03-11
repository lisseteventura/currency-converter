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
  console.log(currencyOptions);
  //first param = function
  //second param = array
  //whenever the items in the array change, we want to rerun the effect
  //we need to populate our select option from the list of rates using state
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals"> = </div>
      <CurrencyRow />
    </>
  );
}

export default App;
