import {ImageBackground, Pressable, Text, View, Alert, Button} from "react-native";
import React, {Component} from "react";
import {StatusBar} from "expo-status-bar";
import styles from "../styles/styles";

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Account extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.backdrop}>
            </View>

        );
    }
}

export default Account;