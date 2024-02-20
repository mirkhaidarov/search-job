import type { PropsWithChildren } from 'react'
import { Container } from './link-styles'

type Props = PropsWithChildren<{
  href?: string
  target?: string
  onClick?: () => void
  isDisabled?: boolean
}>

// eslint-disable-next-line no-script-url
export function Link({ href = 'javascript:;', target, children, isDisabled, onClick }: Props) {
  function handleClick() {
    if (!onClick) {
      return
    }

    onClick()
  }

  return (
    <Container isDisabled={isDisabled} href={href} target={target} onClick={handleClick}>
      {children}
    </Container>
  )
}
