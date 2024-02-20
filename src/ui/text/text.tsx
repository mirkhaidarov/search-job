import styled, { css } from 'styled-components'
import { textVariantToStyleMap } from './text-variant-to-style-map'
import { TextVariant, TextColor } from './types'

export type TextProps = {
  variant: TextVariant
  color?: TextColor
  align?: 'left' | 'center' | 'right'
  textTrasform?: 'uppercase' | 'lowercase'
  isBlock?: boolean
}

export const Text = styled.span<TextProps>`
  ${({ theme, variant, color, align, textTrasform, isBlock }) => css`
    ${textVariantToStyleMap[variant]};
    margin: 0;
    display: ${isBlock ? 'block' : 'inline-block'};
    color: ${color ? theme.colors[color] : 'inherit'};
    text-transform: ${textTrasform ? textTrasform : 'none'};
    text-align: ${align ? align : 'initial'};
  `}
`
