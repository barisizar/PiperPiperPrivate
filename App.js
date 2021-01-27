import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignUpScreen from './src/screens/SignUpScreen.js';
import MainPage from './src/screens/Main/MainPage';
import LoadingScreen from './src/screens/LoadingScreen.js';

import * as firebase from 'firebase'
import { render } from 'react-native-web';


const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAtc5ITYl7p5gy94IVu_rehwdSE6V89g24",
  authDomain: "piper-6f968.firebaseapp.com",
  projectId: "piper-6f968",
  storageBucket: "piper-6f968.appspot.com",
  messagingSenderId: "296533610617",
  appId: "1:296533610617:web:d19f0704ab3b2a54b144a8",
  measurementId: "G-PSH1VC8JGC"
};


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
    //     <NavigationContainer>
    //   <Stack.Navigator>
 
    //     <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }}/>
        

    //   </Stack.Navigator>
    // </NavigationContainer>
      )
    }

    if (!loggedIn) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
 
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
return (

  <NavigationContainer >
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainPage}  options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

)
  }
}
export default App;