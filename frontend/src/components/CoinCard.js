import { StyledCard } from './styles/Card.styled'

export default function CardCoin({ name, description, market_data}) {

  
  return (
    <StyledCard layout={'column'}>
      <div>
        <h2>Name: {name}</h2>
        <p>Description: {description["en"]}</p>
        <p>Current price: {market_data.current_price["usd"]} $</p>
        <p>High (24h): {market_data.high_24h["usd"]} $</p>
        <p>Low (24h): {market_data.low_24h["usd"]} $</p>
        <p>Price Change Percentage (24h): {market_data.price_change_percentage_24h} %</p>
        <p>Price Change Percentage (7d): {market_data.price_change_percentage_7d} %</p>
        <p>Price Change Percentage (14d): {market_data.price_change_percentage_14d} %</p>
        <p>Price Change Percentage (30d): {market_data.price_change_percentage_30d} %</p>
        <p>Price Change Percentage (60d): {market_data.price_change_percentage_60d} %</p>
        <p>Price Change Percentage (200d): {market_data.price_change_percentage_200d} %</p>
        <p>Price Change Percentage (1y): {market_data.price_change_percentage_1y} %</p>
      </div>
    </StyledCard>
  )
}