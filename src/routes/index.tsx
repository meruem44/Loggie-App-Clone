import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './drawer.routes';

const Routes: React.FC = () => {
  return (
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
  );
}

export default Routes;