import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput,Button, TouchableOpacity} from 'react-native';


import firebase from 'firebase'

export class SignUpScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
          <View style={styles.container}>
              <TextInput
                  style={styles.inputBox}
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                  placeholder='Name'
              />
              <TextInput
                  style={styles.inputBox}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder='Email'
                  autoCapitalize='none'
              />
              <TextInput
                  style={styles.inputBox}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder='Password'
                  secureTextEntry={true}
              />
              <TouchableOpacity 
              onPress={() => this.onSignUp()}
              style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
      )
    }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e7e4d9',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  }
})

export default SignUpScreen;

