import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import Register from './src/screens/reg';
import Home from './src/screens/home';
import Register2 from './src/screens/reg2';
import Register3 from './src/screens/reg3';
import Register4 from './src/screens/reg4';
import Reg0 from './src/screens/reg0';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register2" 
        component={Register2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register3" 
        component={Register3} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Register4" 
        component={Register4} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Reg0" 
        component={Reg0} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
     
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}