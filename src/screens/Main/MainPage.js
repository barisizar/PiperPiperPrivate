import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { connect } from 'react-redux'

function MainPage (props) {
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const { currentUser} = props;

    //     if (props.route.params.uid === firebase.auth().currentUser.uid) {
    //         setUser(currentUser)
    //     }
    // })
  // const Info= () => {
    
  // }
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
        <Text>MainPage</Text>
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
  const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
export default connect(mapStateToProps, null)(MainPage);
