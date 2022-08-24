import { IEmployee, Keys } from "../../../types";

export interface IModalDetailEmployeeProps {
  open: boolean;
  closeModal: () => void;
  employee: IEmployee;
}

export interface IInfoEmployee {
  id: Keys,
  label: string,
  format: (label: string | number) => string
}