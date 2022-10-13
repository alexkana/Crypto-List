import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home'
import CoinPage from './pages/CoinPage'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import {Routes,Route} from 'react-router-dom'

const theme = {
  colors: {
    header: '#4eb5f1',
    body:'#FAF8F8'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<CoinPage/>} />
         </Routes>
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App