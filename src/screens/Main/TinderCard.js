import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { connect } from 'react-redux'
import TinderCard from "react-tinder-card";


//const TinderCard = () => {
    // const [user, setUser] = useState(null);

    const TinderCards = () => {
        const [people, setPeople] = useState([]);
        useEffect(() => {

            firebase.firestore().collection("users")
                .onSnapshot((snapshot) =>
                    setPeople(snapshot.docs.map((doc) => doc.data()))
                );
        }, []);
            return (
            <View style={styles.container}>
                <View >
                    {people.map((person) => (
                        <TinderCard style = {styles.card}
                        
                            key={person.name}
                            preventSwipe={["up", "down"]}

                        >
                            <View
                                
                                    style = {styles.card}
                               
                            >
                                <Image style={{ width: "300%", height: 500, marginLeft: -40,marginTop: 20 }}
                                    source={{ uri: person.photo }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: "250%", alignContent: 'center', fontStyle: 'bold', fontStyle: '', color: 'black'}}>{person.name}
                                    
                                </Text>
                                
                            </View>
                        </TinderCard>
                    ))}
                </View>

            </View>
        );   
    };
    

//};
const styles = StyleSheet.create({
    container: {
    
        flex: 1,
        backgroundColor: 'rgb(255, 45, 85)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -200,
        
      
        
    },
    // style: {
    //     marginLeft: 450,
    //     marginLeft: 450,
    //     marginTop: 0,
    //     marginBottom: -500,
    // },
   
    card: {
        
        position: 'relative',
        //position: 'absolute',
        width: '300%',
        height: '500%',
        padding: 0,
        backgroundsize: 'cover',
        backgroundposition: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 500,
        
        
    }
});

export default TinderCards;