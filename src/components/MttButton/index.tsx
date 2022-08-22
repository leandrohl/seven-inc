import { Button, ButtonProps, CircularProgress } from '@mui/material'
import React from 'react'
import * as S from './styles'

export interface IButtonProps extends ButtonProps {
  loading?: boolean
  handleClick?: () => void
}

const MttButton: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { loading, color, variant, children, handleClick } = props

  const handleButton = () => {
    if (!loading && handleClick) handleClick()
  }

  return (
    <Button
      onClick={handleButton}
      role='button-material'
      color={color || 'primary'}
      variant={variant || 'contained'}
      style={{ minHeight: 30 }}
      {...props}
    >
      {loading ? <CircularProgress size={18} color="inherit" role="loading" /> : children}
    </Button>
  )
}

export default MttButton
