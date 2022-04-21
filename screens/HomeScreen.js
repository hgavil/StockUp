import {ImageBackground, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <View style={styles.container}>
                        <Text>home!</Text>
                    </View>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default HomeScreen;