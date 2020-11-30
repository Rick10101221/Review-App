import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={HomeStack}
      />
      <Drawer.Screen
        name='About'
        component={AboutStack}
      />
    </Drawer.Navigator>
  );
}