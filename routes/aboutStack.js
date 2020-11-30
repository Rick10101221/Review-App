import React from 'react';
import About from '../pages/about';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';

export default function Navigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CCC',
          height: 110,
        }
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='About'/>
          }
        }}
      />
    </Stack.Navigator>
  )
}
