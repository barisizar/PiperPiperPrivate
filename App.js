import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image style={{width: "100%", height:300}}
          source={require('./src/images/piedpiper.png')}
          resizeMode="contain"
        />
        <Text style={{fontSize:44, fontWeight:'bold', color:'white'}} >
        Hello</Text>
        <Text style={{fontSize:24, color:'gray', textAlign:'center', marginHorizontal: 20}} >
         Welcome to Pied Piper sign in to walk and win!</Text>
        <View style={{flexDirection:'row', margin:20, paddingVertical:20}}>
          <TouchableOpacity
          style={{backgroundColor: '#28a628', padding:10, width:100, borderRadious:30, marginHorizontal:2, borderColor:'white'}}>
            <Text style={{textAlign:'center', color:'white', fontsize:18}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor: '#28a628', padding:10, width:100, borderRadious:30, marginHorizontal:2, borderColor:'white'}}>
            <Text style={{textAlign:'center', color:'white', fontsize:18}}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;