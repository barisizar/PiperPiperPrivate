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
        Welcome to Piper!
        Best dating app of 2021!</Text>
        <View style={{ flexDirection:'row', margin:20, paddingVertical:20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{marginRight: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold', color:'white'}}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Sign Up')}
            style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold', color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2d1742',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

export default HomeScreen;