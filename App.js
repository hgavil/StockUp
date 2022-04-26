import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from "react";
import HomeScreen from "./screens/HomeScreen";
import Portfolio from "./screens/Portfolio";
import Settings from "./screens/Settings";
import "./styles/styles.js";
import styles from "./styles/styles";
import TabBarIcon from '@react-navigation/bottom-tabs/src/views/TabBarIcon';
import { Image } from "react-native";

/* ICONS used fairly as part of the Flaticon License: "Free for personal and commercial purpose with attribution". Credits go to users Freepik, Miroliubov, and Gregor Cresnar Premium. */

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator backBehavior='history'>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
          <Image source={require("./assets/icons/home.png")} style={{width: 25, height: 25, tintColor: focused ? '#1c8cfc' : '#a4a4a5'}} />)
        }} />
      <Tab.Screen name="Portfolio" component={Portfolio}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({focused}) => (
          <Image source={require("./assets/icons/portfolio.png")} style={{width: 25, height: 25, tintColor: focused ? '#1c8cfc' : '#a4a4a5'}} />)
        }} />
      <Tab.Screen name="Settings" component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({focused}) => (
          <Image source={require("./assets/icons/settings.png")} style={{width: 25, height: 25, tintColor: focused ? '#1c8cfc' : '#a4a4a5'}} />)
        }} />
    </Tab.Navigator>
  );
}

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        );
    }
}
export default App;
