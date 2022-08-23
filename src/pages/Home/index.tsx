import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { data } from '../../data/data';
import DrawerEmployee from './components/DrawerRegisterEmployee';
import TableListEmployee from './components/TableListEmployee';

import * as S from './styles';
import { IEmployee } from './types';
import InfoIcon from '@mui/icons-material/Info';

function Home() {
  const [listEmployee, setListEmployee] = useState<IEmployee[]>(data)
  const [openDrawerNewEmployee, setOpenDrawerNewEmployee] = useState(false)

  const handleInsertEmployee = (newEmployee: IEmployee) => {
    const isEmployeeExisted = listEmployee.find(employee => employee.id === newEmployee.id)

    if (!isEmployeeExisted) {
      setListEmployee([newEmployee, ...listEmployee])
    }
  }

  const handleEditEmployee = (editedEmployee: IEmployee) => {
    const employeeIndex = listEmployee.findIndex((employee: IEmployee) => employee.id === editedEmployee.id)

    if (employeeIndex !== -1) {
      listEmployee[employeeIndex] = editedEmployee
      setListEmployee(listEmployee)
    }
  }

  const handleRemoveEmployee = (employeeId: number) => {
    setListEmployee(listEmployee => listEmployee.filter(employee => employee.id !== employeeId))
  }

  const renderNoResults = () => (
    <S.ContainerNoResult>
      <InfoIcon />
      <Typography variant="h6" style={{ marginBottom: 56, marginTop: 24, textAlign: 'center' }}>
         Não foi encontrado nenhum resultado.
      </Typography>
    </S.ContainerNoResult>
  )

  return (
    <S.Container>
      <S.Info>
        <Typography variant='h1'> Funcionários </Typography>
        <Button onClick={() => setOpenDrawerNewEmployee(true)}>
          Novo Funcionário
        </Button>
      </S.Info>
      {
        listEmployee.length > 0 ? (
          <TableListEmployee 
            listEmployee={listEmployee} 
            editEmployee={handleEditEmployee}
            removeEmployee={handleRemoveEmployee}
          />
        ) : renderNoResults()
      }
      <DrawerEmployee
        open={openDrawerNewEmployee}
        onClose={() => setOpenDrawerNewEmployee(false)}
        handleSave={handleInsertEmployee}
      />
    </S.Container>
  );
}

export default Home;