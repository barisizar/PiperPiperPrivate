import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const SignUpScreen = ({ navigation }) => {


    return(
        <View style={styles.container}>
            <Image style={{width: "100%", height:300}}
            source={require('../images/piedpiper.png')}
            resizeMode="contain"
            />  
        </View>
        );
    };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SignUpScreen;
