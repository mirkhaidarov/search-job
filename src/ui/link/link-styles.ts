import styled, { css } from 'styled-components'

const disabledStyle = css`
  cursor: default;
  color: ${({ theme }) => theme.colors.borderDark};
`

export const Container = styled.a<{
  isDisabled?: boolean
}>`
  cursor: pointer;
  text-decoration: none;

  ${({ isDisabled }) => isDisabled && disabledStyle};
`
