import React, { Component } from "react";

class CurrencyRow extends Component {
  render() {
    return (
      <div>
        <input type="number" className="input" />
        <select>
          <option value="Hi"> Hi </option>
        </select>
      </div>
    );
  }
}

export default CurrencyRow;
