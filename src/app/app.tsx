import { Explore } from '@screens/explore'
import { GlobalStyle } from '@style/global-style'
import { Theme } from './theme'

export function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Explore />
    </Theme>
  )
}
