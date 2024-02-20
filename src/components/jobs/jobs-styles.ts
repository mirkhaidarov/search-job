import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 15px;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.colors.borderDark} 0px 4px 6px, ${({ theme }) =>
  theme.colors.borderDark} 0px 5px 15px;
  background-color: ${({ theme }) => theme.colors.background2};
}
`

export const Wrapper = styled.div`
  padding: 30px 20px 20px 25px;
}`

export const Title = styled.div`
  margin-bottom: 20px;
`

export const City = styled.div`
  margin-bottom: 20px;
`

export const Organization = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Sallary = styled.div`
  margin-bottom: 10px;
`

export const Skills = styled.div`
  margin-bottom: 30px;
`

export const Description = styled.div``

export const BadgeWrapper = styled.div`
  margin-left: 5px;
`
