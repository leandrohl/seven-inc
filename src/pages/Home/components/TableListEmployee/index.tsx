/* eslint-disable no-sparse-arrays */
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IEmployee } from '../../types';
import { Column, MttTableProps } from './types';
import { IconButton, Tooltip, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DrawerEmployee from '../DrawerRegisterEmployee';
import Modal from '../../../../components/Modal';
import ModalDetailEmployee from './ModalDetailEmployee';


export default function TableListEmployee(props: MttTableProps) {
  const { listEmployee, editEmployee, removeEmployee } = props;

  const [openDrawerEdit, setOpenDrawerEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalView, setOpenModalView] = useState(false)

  const [employeeSelected, setEmployeeSelected] = useState<IEmployee>()

  const handleCloseModalDelete = () => setOpenModalDelete(false)
  const handleCloseModalView = () => setOpenModalView(false)

  const columns: readonly Column[] = [
    {id: 'name', label: 'Nome'},
    {id: 'email', label: 'E-mail'},
    {id: 'phone', label: 'Telefone'},
    {id: 'salary', label: 'Salário'},
    {id: 'created_at', label: 'Data de contratação'},
  ]


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  // align={column.align}
                  // style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key='actions'>
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listEmployee.map((employee) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={employee.id}>
                    {columns.map((column) => {
                      const value = employee[column.id];
                      return (
                        <TableCell key={column.id}>
                          {String(value)}
                        </TableCell>
                      );
                    })} 
                    <TableCell>
                      <Tooltip title="Visualizar" arrow>
                        <IconButton onClick={() => {
                          setEmployeeSelected(employee)
                          setOpenModalView(true)
                        }}>
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar" arrow>
                        <IconButton onClick={() => {
                          setEmployeeSelected(employee)
                          setOpenDrawerEdit(true)
                        }}>
                          <CreateIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir" arrow>
                        <IconButton onClick={() => {
                          setEmployeeSelected(employee)
                          setOpenModalDelete(true)
                        }}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <DrawerEmployee 
        open={openDrawerEdit}
        onClose={() => setOpenDrawerEdit(false)}
        employee={employeeSelected}
        handleSave={editEmployee}
      />
      <Modal
        open={openModalDelete}
        onClose={handleCloseModalDelete}
        title='Excluir funcionário'
        cancelButton={handleCloseModalDelete}
        confirmButton={() => {
          if (employeeSelected) {
            removeEmployee(employeeSelected.id)
            handleCloseModalDelete()
          }
        }}
        confirmButtonText='Confirmar'
      >
        <Typography variant="body1"> Ao excluir funcionário, não poderá desfazer a ação. </Typography>
        <Typography variant="subtitle1" style={{ marginTop: '16px'}}>Deseja continuar? </Typography>
      </Modal>
      { employeeSelected &&
        <ModalDetailEmployee
          open={openModalView}
          closeModal={handleCloseModalView}
          employee={employeeSelected}
        />
      }
    </Paper>
  );
}
