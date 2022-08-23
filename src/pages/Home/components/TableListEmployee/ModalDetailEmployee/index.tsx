import { Typography } from '@mui/material'
import React from 'react'
import Modal from '../../../../../components/Modal'
import { IEmployee, Keys } from '../../../types';

import * as S from './styles'

interface IModalDetailEmployeeProps {
  open: boolean;
  closeModal: () => void;
  employee: IEmployee;
}

interface IInfoEmployee {
  id: Keys,
  label: string,
  format: (label: string | number) => string
}

const ModalDetailEmployee: React.FC<IModalDetailEmployeeProps> = (props: IModalDetailEmployeeProps) => {
  const { open, closeModal, employee } = props

  const validateIfNull = (input?: string, inputOptional?: string): string => {
    return input || (inputOptional || '-')
  }

  const infoEmployee: IInfoEmployee[] = [
    { id: 'id', label: 'ID', format: (label) => validateIfNull(label.toString())},
    { id: 'name', label: 'Nome', format: (label) => validateIfNull(label.toString())},
    { id: 'document', label: 'CPF', format: (label) => validateIfNull(label.toString())},
    { id: 'email', label: 'E-mail', format: (label) => validateIfNull(label.toString())},
    { id: 'phone', label: 'Telefone', format: (label) => validateIfNull(label.toString())},
    { id: 'birth_date', label: 'Data de nascimento', format: (label) => validateIfNull(label.toString())},
    { id: 'salary', label: 'Salário', format: (label) => label.toString()},
    { id: 'created_at', label: 'Data de contratação', format: (label) => validateIfNull(label.toString())},
  ]

  return (
    <Modal
      open={open}
      onClose={closeModal}
      title='Detalhes do funcionário'
      confirmButtonText='Fechar'
      confirmButton={closeModal}
    >
      <S.Container>
        {
          infoEmployee.map(item => {
            const value = item.format(employee[item.id])
            return (
              <S.DetailItem>
                <Typography variant="subtitle2"> {item.label} </Typography>
                <Typography variant="subtitle2">{value}</Typography>
              </S.DetailItem>
            )
          })
        }
      </S.Container>
    </Modal>
  )
}

export default ModalDetailEmployee