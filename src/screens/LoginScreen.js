import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const LoginScreen = ({ onSignIn}) => {


    return(
        <View style={styles.container}>
            <View style={{padding:'10', flexDirection:'column', margin:20, paddingVertical:20}}>
                <Text style={{fontSize:24, textAlign:'center', marginHorizontal: 20}} >
                Email: </Text>
                <TextInput style={{fontSize:24, color:'gray', textAlign:'center', marginHorizontal: 20}}  />

            </View>
        </View>
        );
    };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoginScreen;
