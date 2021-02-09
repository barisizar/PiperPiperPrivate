import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { connect } from 'react-redux'

function MainPage (props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
    const { currentUser} = props;

    //if (props.route.params.uid === firebase.auth().currentUser.uid) {
        //setUser(currentUser)
    //}
    })
  const Info= () => {
    
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
        //alignItems:'center',
        //justifyContent:'center'
    }}>
        <TouchableOpacity 
                style={{marginLeft: 450, width:"35%", backgroundColor:"#0000FF", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:0}}>
                    <Text style={styles.buttonText}>Here is our picks for you!</Text>
            </TouchableOpacity>
        <TouchableOpacity 
                //onPress={() => Info()}
                style={{marginLeft: 300, width:"5%", backgroundColor:"#FF0000", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:200, marginBottom:-50}}>
                    <Text style={styles.buttonText}>Dislike</Text>
            </TouchableOpacity>
        <TouchableOpacity 
                //onPress={() => onSignOut()}
                style={{marginLeft: 1050, width:"5%", backgroundColor:"#008000", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:0, marginBottom:100}}>
                    <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
        <Image source={{uri: 'https://placeimg.com/640/480/people'}}
        style={{marginLeft: 510, width: 400, height: 500, marginTop: -300, marginBottom: 200}} />
                <TouchableOpacity 
                onPress={() => Info()}
                style={{marginLeft: 650, width:"10%", backgroundColor:"#0000FF", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:-100, marginBottom:100}}>
                    <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
        <TouchableOpacity 
                onPress={() => onSignOut()}
                style={{marginLeft: 650, width:"10%", backgroundColor:"#0000FF", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:-90, marginBottom:150}}>
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
