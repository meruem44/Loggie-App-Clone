import React from 'react';

import { Container, TextInput } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles';

const Input: React.FC = () => {
  return (
    <Container style={{ elevation: 9 }}>
      <MaterialCommunityIcons name="search-web" size={24} color={colors.grayInput} />
     <TextInput placeholder="Onde será a retirada ?" placeholderTextColor={colors.grayInput} />
    </Container>
  );
};

export default Input;
