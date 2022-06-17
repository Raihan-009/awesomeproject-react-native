import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/inputtext';
import Image from './screens/image';
const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {Home} />
      <Stack.Screen name = 'Image' component = {Image} />
    </Stack.Navigator>
  )
}
export default App = () => {
  return(
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  )
}