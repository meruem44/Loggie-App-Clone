import React from 'react';
import MapView from 'react-native-maps';

import { Container } from './styles';
import Header from '../../components/Header';
import TextInput from '../../components/Input';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <TextInput />
      <MapView 
        style={{ flex: 1 }}
      />
    </Container>
  );
};

export default Home;
