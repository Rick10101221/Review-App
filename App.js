import React from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'
import {
  EBGaramond_400Regular,
} from '@expo-google-fonts/eb-garamond';
import Home from './pages/home';

export default () => {
  let [fontsLoaded] = useFonts({
    EBGaramond_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Home />
        <Text style={{ fontFamily: 'EBGaramond_400Regular' }}>
          EB Garamond Regular
        </Text>
      </View>
    );
  }
};