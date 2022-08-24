/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Drawer, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@mui/material';
import * as S from './styles'
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import Validator from '../../../../utils/validator';
import { IEmployeeError, IEmployeeInfo, IDrawerProps } from './types';
import { ChangeEvent, useEffect } from 'react';
import Mask from '../../../../utils/masks';
import { format } from 'date-fns';

export default function DrawerRegisterEmployee(props: IDrawerProps) {
  const { onClose, open, employee, handleSave} = props

  useEffect(() => {
    if (employee && open) {
      formik.setValues(employee)
    }
  }, [open])

  const verifyObjectEmpty = (errors: IEmployeeError) => {
    let errorCount = 0
    Object.values(errors).forEach(error => {
      if (typeof error === 'string' && error !== '' ) {
        errorCount++
      }
    })
    return errorCount === 0
  }

  const validate = (values: IEmployeeInfo) => {
    const errors: IEmployeeError = new IEmployeeError()

    if (!values.name) {
      errors.name = 'O campo deve ser preenchido';
    }

    if (!values.document) {
      errors.document = 'O campo deve ser preenchido';
    } else if (!Validator.cpf(values.document)) {
      errors.document = 'O CPF digitado é inválido';
    }

    if (!values.email) {
      errors.email = 'O campo deve ser preenchido';
    } else if (!Validator.email(values.email)) {
      errors.email = 'O e-mail digitado é inválido';
    }

    if (!values.phone) {
      errors.phone = 'O campo deve ser preenchido';
    }

    if (!values.birth_date) {
      errors.birth_date = 'O campo deve ser preenchido';
    }

    if (!values.salary) {
      errors.salary = 'O campo deve ser preenchido';
    }

    if (!values.created_at) {
      errors.created_at = 'O campo deve ser preenchido';
    }

    if (!verifyObjectEmpty(errors)) return errors
    return
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      document: '',
      email: '',
      phone: '',
      birth_date: '',
      salary: '',
      created_at: '',
    },
    validate,
    onSubmit: (values: IEmployeeInfo ) => {
      const updateValues = {
        ...values, 
        id: employee ? employee.id : Math.floor(Math.random() * 65536)
      }
      handleSave(updateValues)
      handleClose()
    }
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>, mask?: (value: string) => string) => {
    if (mask) {
      const newEvent = event
      newEvent.target.value = mask(event.target.value)
      formik.handleChange(newEvent)
    } else {
      formik.handleChange(event)
    }
  }

  const handleClose = () => {
    formik.resetForm()
    onClose()
  }

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
    >
      <S.Container>
        <S.Header>
          <Typography variant='h6'> {`${employee ? 'Editar' : 'Adicionar'}`} Funcionário</Typography>
          <Tooltip title="Fechar" arrow>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </S.Header>
        <S.Form onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Nome"
            variant="outlined"
            onChange={onChange}
            value={formik.values.name}
            error={!!formik.errors.name && formik.touched.name}
            helperText={formik.touched.name && formik.errors.name}
            size='small'
          />
          <TextField
            id="document"
            name="document"
            label="CPF"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, Mask.cpf)}
            value={formik.values.document}
            error={!!formik.errors.document && formik.touched.document}
            helperText={formik.touched.document && formik.errors.document}
            size='small'
            inputProps={{ maxLength: 14 }}
          />
          <TextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            onChange={onChange}
            value={formik.values.email}
            error={!!formik.errors.email && formik.touched.email}
            helperText={formik.touched.email && formik.errors.email}
            size='small'
          />
          <TextField
            id="phone"
            name="phone"
            label="Telefone"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, Mask.phone)}
            value={formik.values.phone}
            error={!!formik.errors.phone && formik.touched.phone}
            helperText={formik.touched.phone && formik.errors.phone}
            size='small'
          />
          <TextField
            id="birth_date"
            name="birth_date"
            label="Data de nascimento"
            variant="outlined"
            onChange={onChange}
            value={formik.values.birth_date}
            type='date'
            error={!!formik.errors.birth_date && formik.touched.birth_date}
            helperText={formik.touched.birth_date && formik.errors.birth_date}
            size='small'
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: format(new Date(), 'yyyy-MM-dd') }}
          />
          <TextField
            id="salary"
            name="salary"
            label="Salário"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
            value={formik.values.salary}
            error={!!formik.errors.salary && formik.touched.salary}
            helperText={formik.touched.salary && formik.errors.salary}
            size='small'
          />
          <TextField
            id="created_at"
            name="created_at"
            label="Data de contratação"
            variant="outlined"
            type='date'
            onChange={onChange}
            value={formik.values.created_at.toString()}
            error={!!formik.errors.created_at && formik.touched.created_at}
            helperText={formik.touched.created_at && formik.errors.created_at}
            size='small'
            InputLabelProps={{ shrink: true }}
            inputProps={{ max: format(new Date(), 'yyyy-MM-dd') }}
          />
          <Button type="submit"> Enviar </Button>
        </S.Form>
      </S.Container>
    </Drawer>
  );
}