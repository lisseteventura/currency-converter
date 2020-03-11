import React from "react";

const CurrencyRow = props => {
  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {/* loop through currencyOptions */}
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
