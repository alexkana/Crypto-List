import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 8px
`