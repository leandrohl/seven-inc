import { 
  Button,
  Dialog,
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  useMediaQuery, 
  useTheme 
} from '@mui/material'
import React from 'react'
import IModalProps from './types';


const Modal: React.FC<IModalProps> = (props: IModalProps) => {
  const {
    open,
    onClose,
    title,
    children,
    confirmButtonText,
    confirmButton,
    cancelButtonText,
    cancelButton,
    confirmButtonDisabled
  } = props

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          { children }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          cancelButton && 
          <Button autoFocus onClick={onClose}>
            { cancelButtonText || 'Cancelar '}
          </Button>
        }
        {
          confirmButton && 
          <Button 
            onClick={confirmButton} 
            autoFocus 
            disabled={confirmButtonDisabled}
          >
            { confirmButtonText || 'Salvar '}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}

export default Modal
