import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from "react";
import HomeScreen from "./screens/HomeScreen";
import Portfolio from "./screens/Portfolio";
import Settings from "./screens/Settings";
import Login from "./screens/Login"
import "./styles/styles.js";
import styles from "./styles/styles";
import TabBarIcon from '@react-navigation/bottom-tabs/src/views/TabBarIcon';
import { Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from "./screens/Account";
import { useState } from "react";

/* ICONS used fairly as part of the Flaticon License: "Free for personal and commercial purpose with attribution". Credits go to users Freepik, Miroliubov, and Gregor Cresnar Premium. */

/* Styling notes
  Purple color: #5E43AB
  Blue Color: #1c8cfc
  Gray Color: #a4a4a5
  */

const Tab = createBottomTabNavigator();
const HomeStackNav = createNativeStackNavigator();
const LoginStackNav = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStackNav.Navigator>
            <HomeStackNav.Screen name="Home" component={HomeScreen}  />
            <HomeStackNav.Screen name="Account" component={Account}/>

        </HomeStackNav.Navigator>
    );
}

function App(){
  const [loginStatus,setStatus]=useState(false)
  const status=()=>{
    setStatus(!loginStatus)
  }
  if(!loginStatus)
  {
    return(
      <Login status={status}/>
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'>
        <Tab.Screen name="HomeScreen" component={HomeStackScreen}
          options={{
          headerShown: false,
            title: 'Home',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Home</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/home.png")} style={{ width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5' }} />)
          }} />
        <Tab.Screen name="Portfolio" component={Portfolio}
          options={{
            title: 'Portfolio',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Portfolio</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/portfolio.png")} style={{width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5'}} />)
          }} />
        <Tab.Screen name="Settings"
          options={{
            title: 'Settings',
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{fontSize: 10, color: focused ? '#5e43ab' : '#a4a4a5'}}>Settings</Text>
            ),
            tabBarLabelPosition: 'below-icon',
            tabBarIcon: ({focused}) => (
            <Image source={require("./assets/icons/settings.png")} style={{width: 25, height: 25, tintColor: focused ? '#5e43ab' : '#a4a4a5'}} />)
          }}>
            {props => <Settings {...props} status={status} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
