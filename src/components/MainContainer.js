import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import SearchBar from "./SearchBar"

const sortStrategies = {
  Alphabetically: (a, b) => a.ticker.localeCompare(b.ticker),
  Price: (a, b) => a.price - b.price,
}

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState("")

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

  const filteredStocks = stocks.filter(
    (stock) => !filter || stock.type === filter
  )

  const sortedAndFilteredStocks = filteredStocks.sort(sortStrategies[sort])

  useEffect(() => {
    fetch("http://localhost:3001/stocks/")
      .then((response) => response.json())
      .then(setStocks)
  }, [])

  return (
    <div>
      <SearchBar onSearch={setFilter} onSort={setSort} sort={sort} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            handleClick={addToPortfolio}
            stocks={sortedAndFilteredStocks}
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
