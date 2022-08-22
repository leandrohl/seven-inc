import React, { useState } from 'react';
import MttButton from '../../components/MttButton';
import { data } from '../../data/data';
import TableEmploye from './components/TableEmployee';

import * as S from './styles';
import { IEmployee } from './types';

const Home: React.FC = () => {
  const [listEmployee, setListEmployee] = useState<IEmployee[]>(data)

  return (
    <S.Container>
      <S.Info>
        <MttButton
          color='primary'
        >
          Novo Funcionário
        </MttButton>
      </S.Info>
      <TableEmploye listEmployee={listEmployee} />
    </S.Container>
  );
}

export default Home;