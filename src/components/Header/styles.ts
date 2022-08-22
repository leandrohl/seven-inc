import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  padding: 0 24px;
  
  > img {
    height: 28px;
    object-fit: cover;
  }
`