import React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation"; 

import Splash from './screens/Splash';
import Loading from './screens/Login/Loading';
import Login from './screens/Login/Login';
import Home from './screens/dashboard/Home';

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  //Splash: Splash,
  //Loading: Loading,
  //Login: Login,
  Home: Home,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
