import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './MainPage'




const EditScreen = ({navigation}) => {
//      constructor(props){
//         super(props);
//     this.state = {
//         Name: '',
//         Age: '',
//         Hobbies: '',
//         Gender:'',
//          InterestedWith:'',
//          FavoriteBand:'',
//      }
//      }
// }
  

      return (
    <View style={styles.container}>
     
        <View style={styles.action}>
          
          <TextInput
        //   onChangeText={Name => this.setState({ Name })}
            placeholder="First Name:"
            
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>
        
        
        <View style={styles.action}>
          
          <TextInput
        //   onChangeText={Age=> this.setState({Age})}
          placeholder="Enter Your Age:"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>
        
        <View style={styles.action}>
          
          <TextInput
        //   onChangeText={Hobbies=> this.setState({Hobbies })}
            placeholder="What are Your Hobbies?"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
               
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            // onChangeText={Gender=> this.setState({ Gender })}
            placeholder="Gender:"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            // onChangeText={InterestedWith=> this.setState({InterestedWith})}
            placeholder="Intersted With?"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          
          <TextInput
            // onChangeText={FavoriteBand=> this.setState({FavoriteBand})}
            placeholder="Enter Your Favourite Bands:"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                
              },
            ]}
          />
        </View>
        
        
        <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('MainPage')}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
    
    </View>
      );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  
});
export default EditScreen