import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid).attrs({
  container: true
})`
  padding: 16px 16px;
  width: 340px !important;
`

export const Header = styled(Grid).attrs({
  item: true,
  xs: 12
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h6 {
    color: ${props => props.theme.color.primary};
    font-size: 18px;
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  overflow-y: auto;

  > div {
    margin: 8px 0;
  }

  > button {
    background: ${props => props.theme.color.primary};
    margin-top: 24px;
    color:  ${props => props.theme.color.white};
  }
  
  > button:hover {
    background-color: ${props => props.theme.color.secondary}
  }
  
`
