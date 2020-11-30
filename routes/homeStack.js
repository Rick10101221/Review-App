import React from 'react';
import Home from '../pages/home';
import ReviewDetails from '../pages/reviewDetails';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import { Dimensions } from 'react-native';

export default function Navigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CCC',
          height: 110,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation}/>,
            headerTitleAlign: 'center',
          }
        }}
      />

      <Stack.Screen
        name='Review Details'
        component={ReviewDetails}
      />
    </Stack.Navigator>
  )
}
