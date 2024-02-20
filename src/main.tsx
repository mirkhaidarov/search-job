import { render } from 'react-dom'
import { App } from './app'

export function renderRoot() {
  render(<App />, document.getElementById('root'))
}

renderRoot()
