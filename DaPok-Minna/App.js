import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { StatusBar } from 'expo-status-bar'
import { 
  StyleSheet, 
  Text, 
  View } from 'react-native'

import LandingScreen from './components/auth/Landing'


const Stack = createStackNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen 
          name = "Landing" 
          component ={LandingScreen}
          options ={{headerShown: false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
