import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/inputtext';
import Image from './screens/image';
const Stack = createStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name = 'Home Screen' component = {Home} />
      <Stack.Screen name = 'Image Screen' component = {Image} />
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