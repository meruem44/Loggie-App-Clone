import React from 'react';

import { Container, Text } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../styles';

interface ItemProps {
  isSelected?: boolean;
  text: string;
  icon: string;
  onPress?(number:number): void;
  number?: number;
};

const ItemMenu: React.FC<ItemProps> = ({ isSelected, text, icon, onPress, number }) => {
  return (
    <Container 
    activeOpacity={0.8}
    onPress={() => onPress ? onPress(number || 0): () => {}}>
      <MaterialCommunityIcons  
        name={icon}
        size={20}
        color={ isSelected ? colors.textSelect :colors.white}
      />
      <Text isSelected={isSelected} >{text}</Text>
    </Container>
  );
};

export default ItemMenu;
