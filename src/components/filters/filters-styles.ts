import styled from 'styled-components'

export const Container = styled.div`
  padding: 22px;
  margin-bottom: 13px;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.colors.borderDark} 0px 4px 6px,
    ${({ theme }) => theme.colors.borderDark} 0px 5px 15px;
  background-color: ${({ theme }) => theme.colors.background2};

  color: ${({ theme }) => theme.colors.mainText};
  display: flex;
  align-items: center;
  justify-content: center;
`
