import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

function Profile (props) {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [uid, setUid] = useState(null);
    const [gender, setGender] = useState(null);
    // useEffect(() => {
    //     console.log(firebase.auth().currentUser.uid)
    //     if (firebase.auth().currentUser.uid) {
    //         setEmail(firebase.auth().currentUser.email)
    //         setName(firebase.auth().currentUser.name)
    //         setUid(firebase.auth().currentUser.uid)
    //     }
        
    // })
    const Info= () => {
    //     setName(firebase.firestore().collection("users")
    //     .doc(firebase.auth().currentUser.uid).get(name)
    //     .then(console.log.name)
    //     )
      }
  const onSignOut = () => {
      firebase.auth().signOut()
          .then((result) => {
              console.log(result)
          })
          .catch((error) => {
              console.log(error)
          })
  }
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Text>Profile</Text>
        <Text>User Id : {uid} </Text>
        <Text>Name : {name} </Text>
        <Text>Mail : {email} </Text>
        <TouchableOpacity 
                onPress={() => Info()}
                style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                    <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
        <TouchableOpacity 
                onPress={() => onSignOut()}
                style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                    <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
    </View>
      
        )
    }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Profile;
