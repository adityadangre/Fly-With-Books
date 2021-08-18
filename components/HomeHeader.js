import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeHeader extends Component {
    render() {
        return (
            <View>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.header}>
                    <View style={styles.allContainer}>
                        <TouchableOpacity>
                            <Text style={styles.allicon}>☰</Text>
                            <Text style={styles.allText}>All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchBar}>
                        <View style={styles.searchicon}>
                            <SearchIcon />
                        </View>
                        <TextInput
                            style={styles.search}
                            placeholder="Search"
                            placeholderTextColor="gray"
                        />   
                    </View>
                    <TouchableOpacity style={styles.icon}>
                        <FavoriteBorderOutlinedIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <NotificationsOutlinedIcon />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(25)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },
    allContainer: {
        borderWidth: RFValue(2),
        borderColor: 'gray',
        width: 50,
        height: 30,
        borderRadius: 3,
        justifyContent: 'center',
    },
    allText: {
        fontWeight: 'bold',
        marginLeft: 24,
        marginTop: -18
    },
    allicon: {
        color: 'gray',
        marginLeft: 4
    },
    searchBar: {
        backgroundColor: 'lightgray',
        borderRadius: 50,
        justifyContent: 'center',
        height: 35,
        width: 35,
        width: 180,
    },
    search: {
        color: 'black',
        fontSize: 20,
        marginLeft: 40,
        marginTop: -28
    },
    searchicon: {
        marginLeft: 10
    }
})