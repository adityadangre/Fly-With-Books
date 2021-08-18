import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <View>
                <Text> Splash </Text>
                <TouchableOpacity 
                    onPress={() => {this.props.navigation.navigate("Loading")}}
                >
                    <Text>Go to Loading Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
