import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@style/themes'

type Props = PropsWithChildren

export function Theme({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}
