import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Button } from './styles';

import { Entypo } from '@expo/vector-icons';
import { colors } from '../../styles';

const Header: React.FC = () => {

  const navigation = useNavigation();

  return (
    <Container>

      <Button onPress={() => navigation.openDrawer()}>
      <Entypo name="menu" size={30} color={colors.white} />
      </Button>

      <Text>Novo Pedido</Text>
    </Container>
  );
};

export default Header;
