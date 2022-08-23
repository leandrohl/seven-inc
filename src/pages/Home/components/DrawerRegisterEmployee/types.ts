import { IEmployee } from "../../types";

export interface IDrawerProps {
  open: boolean;
  onClose: () => void;
  employee?: IEmployee;
  handleSave: (employee: IEmployee) => void;
}

export interface IEmployeeInfo extends Omit<IEmployee, 'id'>{
}

export class IEmployeeError {
  name: string = ''
  document: string = ''
  email: string = ''
  phone: string = ''
  birth_date: string = ''
  salary: string = ''
  created_at: string = ''
}