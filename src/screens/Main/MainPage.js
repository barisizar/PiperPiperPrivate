import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase'

export class MainPage extends Component {
  constructor(props) {
      super(props);

  }

  onSignOut() {
      firebase.auth().signOut()
          .then((result) => {
              console.log(result)
          })
          .catch((error) => {
              console.log(error)
          })
  }
  render() {
    return(
        <View style={styles.container}>
            <Image style={{width: "100%", height:300}}
            source={require('../../images/piedpiper.png')}
            resizeMode="contain"
            />  
            <TouchableOpacity 
                onPress={() => this.onSignOut()}
                style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                    <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
        )
    }
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainPage;
