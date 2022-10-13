import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
//import Footer from './components/Footer'
import Home from './pages/Home'
import CoinPage from './pages/CoinPage'
import { Container } from './components/styles/Container.styled'
import { GridContainer } from './components/styles/GridContainer.styled'
import GlobalStyles from './components/styles/Global'
import {Routes,Route} from 'react-router-dom'

const theme = {
  colors: {
    header: '#4eb5f1',
    //header: '#ebfbff',
   // body: '#fff',
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
        <GridContainer>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<CoinPage/>} />
         </Routes>
        </GridContainer>
      </>
    </ThemeProvider>
  )
}

export default App