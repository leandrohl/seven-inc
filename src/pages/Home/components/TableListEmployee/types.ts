import { IEmployee, Keys } from "../../types";

export interface Column {
  id: Keys;
  label: string;
  format?: (label : string | number) => string;
}

export interface MttTableProps {
  listEmployee: IEmployee[];
  editEmployee: (employee: IEmployee) => void;
  removeEmployee: (employeeId: number) => void;
}