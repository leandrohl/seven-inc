import { Grid } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Grid).attrs({
  container: true
})`
  
  @media(max-width: 800px) {
    padding: 16px 4px;
  }
`

export const DetailItem = styled(Grid).attrs({
  item: true,
  xs: 12,
  md: 6
})`
  padding: 8px 0;
  width: 360px;

  .MuiTypography-subtitle2:first-child {
    font-weight: 600;
  }
`