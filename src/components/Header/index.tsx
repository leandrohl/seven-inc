import React from 'react';

import * as S from './styles';
import SevenLogo from '../../assets/logo-seven7.png'

const Header: React.FC = () => {
  return (
    <S.Container>
      <img src={SevenLogo} alt="logo-seven7" />
    </S.Container>
  );
}

export default Header;