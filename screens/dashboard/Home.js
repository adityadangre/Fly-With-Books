import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomeHeader from '../../components/HomeHeader';

export default class Home extends Component {
    render() {
        return (
            <View>
                <HomeHeader />
            </View>
        )
    }
}