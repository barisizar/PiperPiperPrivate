import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export class LoadingScreen extends Component  {
    constructor(props) {
        super(props);
        this.state = {
        spinner: false
      };
    }
    //   componentDidMount() {
    //     setInterval(() => {
    //       this.setState({
    //         spinner: !this.state.spinner
    //       });
    //     }, 3000);
    //   }
    render() {
        return (
            <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        );
      }
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
});


export default LoadingScreen;
