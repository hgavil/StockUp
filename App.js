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


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator backBehavior='history'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Settings" component={Settings} />
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
