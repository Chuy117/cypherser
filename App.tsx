import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/routes/StackNavigator';
import { BottomTabNav } from './src/routes/BottomTabNav';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <BottomTabNav /> */}
    </NavigationContainer>
  )
}
