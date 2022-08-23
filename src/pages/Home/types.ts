export interface IEmployee {
  id: number;
  name: string;
  document: string;
  email: string;
  phone: string;
  birth_date: string;
  salary: number;
  created_at: string;
}

export type Keys = 'id'| 'name'| 'document'| 'email'| 'phone'| 'birth_date'| 'salary' | 'created_at';