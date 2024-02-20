import { css } from 'styled-components'
import { defaultFontFamily } from '@style/text-styles'
import { defaultBackgroundColor } from '@style/background-styles'

export const bodyStyled = css`
  body {
    ${defaultFontFamily};
    ${defaultBackgroundColor};
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
