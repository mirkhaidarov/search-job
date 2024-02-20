import { css } from 'styled-components'

// how to convert line-height px/rem to relatives
// relative = line-height px value / font-size px value

// Header styles
export const title1 = css`
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.5;
`

export const title2 = css`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
`

// Subheader styles
export const subHead = css`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.625;
`

export const headline = css`
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.7;
`

// Custom font variants
export const regularText = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.625;
`

export const smallText = css`
  font-weight: 400;
  font-size: 1.2rem;
`
