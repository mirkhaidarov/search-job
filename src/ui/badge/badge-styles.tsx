import styled from 'styled-components'
import { rgba } from 'polished'
import { Text } from '@ui/text'

export const Container = styled((props) => (
  <Text {...props} variant="smallText" color="mainText" />
))`
  border-radius: 3px;
  padding: 3px 5px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.2)};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
`
