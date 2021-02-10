import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { connect } from 'react-redux'
import TinderCard from "./TinderCard";

const MainPage = () => {
    // const [user, setUser] = useState(null);   
            return(
          
            <View style={styles.container}>
                    
                        <TouchableOpacity
            onPress={() => onSignOut()}
                        style={{ marginLeft: 0, width: "10%", backgroundColor: "#d3d3d3", borderRadius: 25, height: 50, alignItems: "center", justifyContent: "center", marginTop: 0, marginBottom: 0 }}>
            <Text style={styles.buttonText}>Sign Out</Text>
            
        </TouchableOpacity>
                    <TinderCard /> 
            </View>
        ); 
    };
const onSignOut = () => {
    firebase.auth().signOut()
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 45, 85)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

    

export default MainPage;