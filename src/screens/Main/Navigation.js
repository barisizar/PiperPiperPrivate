import React, { Component } from 'react'
import MainPage from './MainPage'
import Chats from './Chats';
import Profile from './Profile';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, clearData } from '../redux/actions/index'; 
import firebase from 'firebase'
require('firebase/firestore')
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Entypo';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const EmptyScreen = () => {
    return (null)
}

const Tab = createMaterialTopTabNavigator();
export class BottomTabNavigator extends Component {
    componentDidMount() {
        this.props.clearData();
        this.props.fetchUser();
    }
    render(){
    return (
        <Tab.Navigator initialRouteName="MainPage" labeled={false}>
                <Tab.Screen name="MainPage" component={MainPage}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("MainPage")
                    }
                })}
                    options={{
                        tabBarLabel:'Main',
                    }} />
                <Tab.Screen name="Chats" component={Chats}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Chats")
                        }
                    })}
                    options={{
                        tabBarLabel:'Chats',
                    }} />
                <Tab.Screen name="Profile" component={Profile} 
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Profile", {uid: firebase.auth().currentUser.uid})
                    }})}
                    options={{
                        tabBarLabel:'Profile',
                    }} />
            </Tab.Navigator>
        
    );
};
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, clearData }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(BottomTabNavigator);