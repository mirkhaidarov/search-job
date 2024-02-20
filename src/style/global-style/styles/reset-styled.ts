import { normalize } from 'polished'
import { css } from 'styled-components'

export const resetStyled = css`
  ${normalize()};
  html {
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline-style: none;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  img {
    max-width: 100%;
  }
`
