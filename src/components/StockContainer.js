import React from "react"
import Stock from "./Stock"

function StockContainer({ handleClick, stocks, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={handleClick} />
      ))}
    </div>
  )
}

export default StockContainer
