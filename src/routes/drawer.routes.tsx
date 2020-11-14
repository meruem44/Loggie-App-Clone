import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import DrawerContent from '../components/DrawerContent';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
  return (
      <Navigator
      drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false
        }}
      >
          <Screen name="Home" component={Home} />
      </Navigator>
  );
}

export default DrawerRoutes;