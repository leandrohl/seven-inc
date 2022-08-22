/* eslint-disable no-sparse-arrays */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IEmployee } from '../../types';
import { Column } from './types';
import { IconButton, Tooltip } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface MttTableProps {
  listEmployee: IEmployee[];
}

export default function TableEmployee(props: MttTableProps) {
  const { listEmployee } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns: readonly Column[] = [
    {id: 'name', label: 'Nome'},
    {id: 'email', label: 'E-mail'},
    {id: 'phone', label: 'Telefone'},
    {id: 'salary', label: 'Salário'},
    {id: 'created_at', label: 'Data de contratação'},
  ]


  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

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
            {listEmployee
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => {
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
                        <IconButton>
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar" arrow>
                        <IconButton>
                          <CreateIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir" arrow>
                        <IconButton>
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
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
