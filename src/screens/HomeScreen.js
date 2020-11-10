import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const HomeScreen = ({ navigation }) => {


    return(
        <View style={styles.container}>
        <Image style={{width: "100%", height:300}}
        source={require('../images/piedpiper.png')}
        resizeMode="contain"
        />
        <Text style={{fontSize:44, fontWeight:'bold', color:'white'}} >
        Hello</Text>
        <Text style={{fontSize:24, color:'gray', textAlign:'center', marginHorizontal: 20}} >
        Welcome to Pied Piper sign in to walk and win!</Text>
        <View style={{padding:'10', flexDirection:'row', margin:20, paddingVertical:20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{marginRight: 3, width:"45%", backgroundColor:"#28a628", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold', color:'white'}}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{marginLeft: 3, width:"45%", backgroundColor:"#28a628", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold', color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <Text style={{fontSize:19, color:'gray', textAlign:'center', marginHorizontal: 20}}>Forgot Password?</Text>
      </TouchableOpacity>
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

export default HomeScreen;