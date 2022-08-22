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
  justify-content: end; 

  > button {
    background-color: ${props => props.theme.color.primary};
  }

  > button:hover {
    background-color: ${props => props.theme.color.secondary}
  }
`