import styled from 'styled-components'
import { Link } from '@ui/link'
import { Text } from '@ui/text'

export const Container = styled.div`
  padding: 22px;
  margin-bottom: 13px;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.colors.borderDark} 0px 4px 6px,
    ${({ theme }) => theme.colors.borderDark} 0px 5px 15px;
  background-color: ${({ theme }) => theme.colors.background2};
`

export const Wrapper = styled(Link)`
  color: unset;
`

export const Content = styled.div`
  display: flex;
`

export const LeftSection = styled.div`
  margin-right: 20px;
`

export const RightSection = styled.div``

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 5px;
  margin-bottom: 6px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background1};
`

export const IconContainer = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0px 4px;
`

export const Title = styled((props) => <Text {...props} variant="title2" color="mainText" />)`
  display: flex;
  margin-bottom: 6px;
`

export const Description = styled.div`
  margin-bottom: 10px;
`

export const SkillsContainer = styled.div`
  display: flex;
  font-family: monospace;
`

export const SkillsWrapper = styled.div`
  margin-right: 3px;
  margin-bottom: 2px;
`
