import { StyledCard } from './styles/Card.styled'
import { StyledButton } from './styles/Button.styled';
import {useNavigate} from 'react-router-dom'


export default function Card({ id, name, symbol, current_price, high_24h, low_24h, price_change_24h } ) {
  const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }
  
  return (
    <StyledCard layout={'column'}>
      <div>
        <h2>Name: {name}</h2>
        <p>Symbol: {symbol}</p>
        <p>Current price: {current_price}$</p>
        <p>High (24h): {high_24h}$</p>
        <p>Low (24h): {low_24h}$</p>
        <p>Price Change(24h): {price_change_24h}$</p>
        <StyledButton onClick={()=>handleClick(`/${id}`)}>Learn more</StyledButton>
        </div>
    </StyledCard>
  )
}