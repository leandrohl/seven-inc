export default interface IModalProps {
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
