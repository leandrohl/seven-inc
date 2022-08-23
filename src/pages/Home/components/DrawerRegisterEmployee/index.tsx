/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Drawer, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@mui/material';
import * as S from './styles'
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import Validator from '../../../../utils/validator';
import { IEmployeeError, IEmployeeInfo, IDrawerProps } from './types';
import { useEffect } from 'react';

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
      errors.name = 'Campo deve ser preenchido';
    }

    if (!values.document) {
      errors.document = 'Campo deve ser preenchido';
    } else if (!Validator.cpf(values.document)) {
      errors.document = 'CPF inválido';
    }

    if (!values.email) {
      errors.email = 'Campo deve ser preenchido';
    } else if (!Validator.email(values.email)) {
      errors.email = 'E-mail inválido';
    }

    if (!values.phone) {
      errors.phone = 'Campo deve ser preenchido';
    }

    if (!values.birth_date) {
      errors.birth_date = 'Campo deve ser preenchido';
    }

    if (!values.salary) {
      errors.salary = 'Campo deve ser preenchido';
    }

    if (!values.created_at) {
      errors.created_at = 'Campo deve ser preenchido';
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
      salary: 0,
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
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            value={formik.values.document}
            error={!!formik.errors.document && formik.touched.document}
            helperText={formik.touched.document && formik.errors.document}
            size='small'
          />
          <TextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            value={formik.values.birth_date}
            type='date'
            error={!!formik.errors.birth_date && formik.touched.birth_date}
            helperText={formik.touched.birth_date && formik.errors.birth_date}
            size='small'
          />
          <TextField
            id="salary"
            name="salary"
            label="Salário"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salary}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            error={!!formik.errors.salary && formik.touched.salary}
            helperText={formik.touched.salary && formik.errors.salary}
            size='small'
          />
          <TextField
            id="created_at"
            name="created_at"
            label="Data de criação"
            variant="outlined"
            type='date'
            onChange={formik.handleChange}
            value={formik.values.created_at.toString()}
            error={!!formik.errors.created_at && formik.touched.created_at}
            helperText={formik.touched.created_at && formik.errors.created_at}
            size='small'
          />
          <Button type="submit"> Enviar </Button>
        </S.Form>
      </S.Container>
    </Drawer>
  );
}