import type { PropsWithChildren } from 'react'
import type { TextProps } from '@ui/text'
import { Container } from './badge-styles'

type Props = PropsWithChildren<{
  textTrasform?: TextProps['textTrasform']
  fontWeight?: 'normal' | 'bold'
}>

export function Badge({ textTrasform, fontWeight, children }: Props) {
  return (
    <Container textTrasform={textTrasform} fontWeight={fontWeight}>
      {children}
    </Container>
  )
}
