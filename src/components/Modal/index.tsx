/* eslint-disable indent */
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

interface IModalProps {
  onClose: () => void;
  open: boolean;
  title: string;
  children: React.ReactNode;

  confirmButton?: () => void;
  confirmButtonText?: string;
  cancelButton?: () => void;
  cancelButtonText?: string;
  confirmButtonDisabled?: boolean;

  noButtons?: boolean;
  confirmLoading?: boolean;
}


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
