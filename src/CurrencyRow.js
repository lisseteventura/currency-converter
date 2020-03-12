import React from "react";

const CurrencyRow = props => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props;
  return (
    <div className="currency">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
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
