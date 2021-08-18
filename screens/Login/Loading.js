import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default class Loading extends Component {
    componentDidMount() {
        this.checkIfLoggedIn();
    }
    
    checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.navigation.navigate("Home");
        } else {
          this.props.navigation.navigate("Login");
        }
      });
    };
    
    render() {
        return (
          <View style={styles.container}>
            <Text>Loading</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
});