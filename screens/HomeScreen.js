import {ImageBackground, Pressable, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import styles from "../styles/styles";
import {ScrollView} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.backdrop}>
                <ImageBackground source={require('../assets/bgimage.png')} style={styles.image}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <Text style={styles.titleText}>Welcome back, Justin!</Text>
                        <View style={styles.horizontalLine}/>


                    </ScrollView>
                </ImageBackground>

                <StatusBar style="auto" />
            </View>
        );
    }
}

export default HomeScreen;