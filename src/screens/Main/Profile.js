import React, { useState, useEffect } from 'react'
import {View, SafeAreaView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import firebase from 'firebase';
import 'firebase/firestore';
import EditScreen from './EditScreen';
import { NavigationContainer } from '@react-navigation/native';


const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
useEffect(() => {

  firebase.firestore().collection("users").doc('6aEgg4fSLiUjvYNIL1N8LZiGPau2')
  .onSnapshot(function(snapshot) {
    setName(snapshot.name)
    console.log(snapshot)
  }

      );
}, []);

                        

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Welcome to the piper!',
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{name}</Title>
            
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={{color:"#777777", marginLeft: 20}}>Istanbul</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color:"#777777", marginLeft: 20}}>Age:</Text>
        </View>
        
      </View>

      <View style={styles.infoBoxWrapper}>
      <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>Bio:</Title>
            <Caption>-</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Social Media</Title>
            <Image
              source={{ uri: 'https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-512.png' }}
              style={{ width:30, height:30}}

            />
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Hobbies:</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Gender:</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Interested with:</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
           
            <Text style={styles.menuItemText}>Favorite Bands:</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            
            <Text style={styles.menuItemText}>Settings</Text>
          </View>  
        </TouchableRipple>
        <TouchableOpacity 
                onPress={() => navigation.navigate('EditScreen')}
                style={{marginLeft: 3, width:"45%", backgroundColor:"#042494", borderRadius:25, height:50, alignItems:"center", justifyContent:"center", marginTop:40, marginBottom:10}}>
                    <Text>Edit Your Profile</Text>
            </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});