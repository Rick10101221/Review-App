import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import {
  EBGaramond_400Regular,
} from '@expo-google-fonts/eb-garamond';
import MainNavigator from './routes/mainStack';

export default () => {
  let [fontsLoaded] = useFonts({
    EBGaramond_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MainNavigator />
    );
  }
};