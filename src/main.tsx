import { createRoot } from 'react-dom/client'
import { App } from './app'

export function renderRoot() {
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(<App />)
}

renderRoot()
