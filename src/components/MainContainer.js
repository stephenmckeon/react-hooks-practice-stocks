import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  const addToPortfolio = (stock) => {
    portfolioStocks.includes(stock) ||
      setPortfolioStocks([...portfolioStocks, stock])
  }

  const removeFromPortfolio = ({ id }) => {
    const updatedPortfolioStocks = portfolioStocks.filter(
      (stock) => stock.id !== id
    )

    setPortfolioStocks(updatedPortfolioStocks)
  }

  useEffect(() => {
    fetch("http://localhost:3001/stocks/")
      .then((response) => response.json())
      .then(setStocks)
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer
            handleClick={addToPortfolio}
            stocks={stocks}
            title={"Stocks"}
          />
        </div>
        <div className="col-4">
          <StockContainer
            handleClick={removeFromPortfolio}
            stocks={portfolioStocks}
            title={"My Portfolio"}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
