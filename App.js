import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen.js';
import MainPage from './src/screens/MainPage';
import ForgetPassword from './src/screens/ForgetPassword';

import { render } from 'react-native-web';


const RootStack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator>
 
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Sign Up" component={SignUpScreen} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;