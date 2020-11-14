import React, { useState, useCallback } from 'react';
import { 
  DrawerContentComponentProps, 
  DrawerContentOptions } 
  from '@react-navigation/drawer';

import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import ItemMenu from '../ItemMenu';

import { 
  Container,
  Header,
  ContentTitle,
  Description,
  Name,
  Content,
  Footer,
  ContentFooter,
  TextContentFooter
} from './styles';
import { colors } from '../../styles';

interface DrawerContentProps extends DrawerContentComponentProps<DrawerContentOptions>{

};

const DrawerContent: React.FC<DrawerContentProps> = ({ ...res }) => {

  const [selected, setSelected] = useState(0);

  const handleSelected = useCallback((number: number) => {
    setSelected(number);
  }, [setSelected]);

  return (
    <Container>
      <Header>
      <FontAwesome5 name="rocket" size={24} color={colors.white} />

        <ContentTitle>
          <Description>
            Que bom ter você aqui
          </Description>
          <Name>
            Paulo Leandro
          </Name>
        </ContentTitle>
        <FontAwesome name="remove" size={24} color={colors.white} />
      </Header>

      <Content>
      <ItemMenu 
      text="Novo Pedido" 
      icon="sign-direction-remove" 
      isSelected={selected === 0}
      onPress={handleSelected}
      number={0}
      />

      <ItemMenu 
      text="Acompanhar" 
      icon="source-commit-start-next-local" 
      isSelected={selected === 1}
      number={1}
      onPress={handleSelected}
      />

      <ItemMenu 
      text="Histórico" 
      icon="id-card" 
      onPress={handleSelected}
      isSelected={selected === 2}
      number={2}
      />

      </Content>

      <Footer>
        <ContentFooter>
          <TextContentFooter>
            Quer saber onde está a sua compra ? Acompanhe seu pedido aqui
          </TextContentFooter>
        </ContentFooter>
        <ItemMenu text="Fale conosco" icon="message-reply-text" />
        <ItemMenu text="Sair" icon="location-exit" />
      </Footer>
    </Container>
  );
}

export default DrawerContent;