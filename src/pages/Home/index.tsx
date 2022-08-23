import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { data } from '../../data/data';
import DrawerEmployee from './components/DrawerEmployee';
import TableEmploye from './components/TableEmployee';

import * as S from './styles';
import { IEmployee } from './types';

const Home: React.FC = () => {
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


  return (
    <S.Container>
      <S.Info>
        <Typography variant='h1'> Funcionários </Typography>
        <Button onClick={() => setOpenDrawerNewEmployee(true)}>
          Novo Funcionário
        </Button>
      </S.Info>
      <TableEmploye 
        listEmployee={listEmployee} 
        editEmployee={handleEditEmployee}
        removeEmployee={handleRemoveEmployee}
      />
      <DrawerEmployee
        open={openDrawerNewEmployee}
        onClose={() => setOpenDrawerNewEmployee(false)}
        handleSave={handleInsertEmployee}
      />
    </S.Container>
  );
}

export default Home;