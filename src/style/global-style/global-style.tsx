import { createGlobalStyle } from 'styled-components'
//import '@fortawesome/fontawesome-free/css/all.css'
import { resetStyled } from './styles/reset-styled'
import { bodyStyled } from './styles/body-styled'

export const GlobalStyle = createGlobalStyle`
  ${resetStyled}
  ${bodyStyled}
`
