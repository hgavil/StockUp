import {ImageBackground, Pressable, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";

class Login extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <Text style={styles.logo}>StockUp</Text>
                    
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Login;

