import {ImageBackground, Text, View} from "react-native";
import styles from "../styles/styles";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <View style={styles.container}>
                        <Text>portfolio!</Text>
                    </View>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Portfolio;