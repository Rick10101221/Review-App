import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from '../routes/drawer';

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}