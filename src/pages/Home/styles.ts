import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
  container: true
})`
  padding: 28px 16px;
`

export const Info = styled(Grid).attrs({
  item: true,
  xs: 12
})`
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between; 
  align-items: center;

  > h1 {
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.color.primary};
  }

  > button {
    background-color: ${props => props.theme.color.primary};
    color:  ${props => props.theme.color.white};
  }

  > button:hover {
    background-color: ${props => props.theme.color.secondary}
  }
`

export const ContainerNoResult = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;

  > svg {
    font-size: 32px;
    color: ${props => props.theme.color.primary};
  }
`
