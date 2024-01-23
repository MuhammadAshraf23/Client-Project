// BtcPrices.js
import React from 'react';

const BtcPrices = ({ btcPrices }) => {
  return (
    <section>
      <h2>BTC Prices</h2>
      <div className="btc-prices">
        <p>USD: {btcPrices.USD && btcPrices.USD.rate}</p>
        <p>GBP: {btcPrices.GBP && btcPrices.GBP.rate}</p>
        <p>EUR: {btcPrices.EUR && btcPrices.EUR.rate}</p>
      </div>
    </section>
  );
};

export default BtcPrices;
